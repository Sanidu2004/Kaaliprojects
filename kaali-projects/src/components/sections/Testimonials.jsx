import { useRef, useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import './Testimonials.css'

export default function Testimonials() {
  const sliderRef = useRef(null)
  const isInteractingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const resumeTimerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 })

  // Infinite continuous auto-movement
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationFrameId
    const speed = 0.85 // smooth scroll speed (pixels per frame)

    // Position in the middle set on load so user can scroll left or right immediately
    const initMiddle = () => {
      const oneThird = slider.scrollWidth / 3
      if (oneThird > 0 && slider.scrollLeft === 0) {
        slider.scrollLeft = oneThird
      }
    }
    initMiddle()

    const step = () => {
      // Pause movement if user is hovering over a card or actively dragging/touching
      if (slider && !isInteractingRef.current && !isHoveredRef.current) {
        slider.scrollLeft += speed

        const oneThird = slider.scrollWidth / 3
        if (oneThird > 0) {
          if (slider.scrollLeft >= oneThird * 2) {
            slider.scrollLeft -= oneThird
          } else if (slider.scrollLeft <= 5) {
            slider.scrollLeft += oneThird
          }
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [])

  // Keep infinite wrap even when user scrolls or drags
  const handleScroll = () => {
    const slider = sliderRef.current
    if (!slider) return
    const oneThird = slider.scrollWidth / 3
    if (oneThird > 0) {
      if (slider.scrollLeft >= oneThird * 2) {
        slider.scrollLeft -= oneThird
      } else if (slider.scrollLeft <= 5) {
        slider.scrollLeft += oneThird
      }
    }
  }

  // Resume auto-movement after a brief pause
  const scheduleResume = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false
    }, 1500)
  }

  // Hover handlers to stop movement when cursor is over cards
  const handleMouseEnter = () => {
    isHoveredRef.current = true
  }

  const handleMouseLeave = () => {
    isHoveredRef.current = false
    if (isDragging) {
      setIsDragging(false)
      scheduleResume()
    }
  }

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    isInteractingRef.current = true
    setIsDragging(true)
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    dragStartRef.current = {
      x: e.pageX,
      scrollLeft: sliderRef.current.scrollLeft,
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const walk = (e.pageX - dragStartRef.current.x) * 1.5
    sliderRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      scheduleResume()
    }
  }

  // Touch / Finger Handlers for Mobile and Tablets
  const handleTouchStart = () => {
    isInteractingRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
  }

  const handleTouchEnd = () => {
    scheduleResume()
  }

  // Duplicate 3 times for a seamless infinite loop
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="testimonials section" id="work">
      <div className="container">
        <div className="testimonials__header reveal-on-scroll">
          <SectionHeading
            title="What Clients Say. Our Impact in Action."
            align="left"
          />
        </div>

        <div
          ref={sliderRef}
          className={`testimonials__slider ${isDragging ? 'is-dragging' : ''}`}
          onScroll={handleScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label="Client testimonials"
        >
          {displayTestimonials.map((testimonial, index) => (
            <figure key={`${testimonial.name}-${index}`} className="testimonial-card">
              <div className="testimonial-card__media">
                {testimonial.image ? (
                  <img src={testimonial.image} alt={`${testimonial.name} profile`} draggable="false" />
                ) : (
                  <div className="testimonial-card__avatar-placeholder">
                    <span>{testimonial.name.slice(0, 2).toUpperCase()}</span>
                  </div>
                )}
              </div>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{testimonial.name}</span>
                <span className="testimonial-card__role">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
