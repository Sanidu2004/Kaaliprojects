import { useEffect, useState, useRef } from 'react'
import { stats } from '../../data/stats.js'
import './StatsBar.css'

function AnimatedStat({ value, isVisible }) {
  const match = value.match(/(\d+)(.*)/)
  const target = Number(match?.[1] ?? 0)
  const suffix = match?.[2] ?? ''
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setCurrentValue(target)
      return undefined
    }

    let animationFrame
    const startTime = performance.now()
    const duration = 2200

    const updateValue = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCurrentValue(Math.round(target * easedProgress))

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue)
      }
    }

    animationFrame = window.requestAnimationFrame(updateValue)

    return () => window.cancelAnimationFrame(animationFrame)
  }, [target, isVisible])

  return (
    <span className="stats-bar__value">
      {currentValue}
      <span className="stats-bar__suffix">{suffix}</span>
    </span>
  )
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="stats-bar reveal-on-scroll">
      <div className="container">
        <div className="stats-bar__panel">
          {stats.map((s, index) => (
            <div key={s.label} className={`stats-bar__item stats-bar__item--${index + 1}`}>
              <AnimatedStat value={s.value} isVisible={isVisible} />
              <span className="stats-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
