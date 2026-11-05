import { useRef, useCallback } from 'react'
import kaaliImage from '../../assets/images/kaali_2.jpeg'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const rafRef = useRef(null)

  // Lightweight 60fps mouse parallax effect
  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2 // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2 // -1 to 1

    rafRef.current = requestAnimationFrame(() => {
      if (heroRef.current) {
        heroRef.current.style.setProperty('--mouse-x', `${(x * 18).toFixed(2)}px`)
        heroRef.current.style.setProperty('--mouse-y', `${(y * 18).toFixed(2)}px`)
        heroRef.current.style.setProperty('--mouse-rot-x', `${(-y * 6).toFixed(2)}deg`)
        heroRef.current.style.setProperty('--mouse-rot-y', `${(x * 6).toFixed(2)}deg`)
      }
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    if (heroRef.current) {
      heroRef.current.style.setProperty('--mouse-x', '0px')
      heroRef.current.style.setProperty('--mouse-y', '0px')
      heroRef.current.style.setProperty('--mouse-rot-x', '0deg')
      heroRef.current.style.setProperty('--mouse-rot-y', '0deg')
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
      aria-label="Hero Introduction"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* =========================================================================
          Layer 1: Futuristic Atmospheric Background with Symmetrical Chevrons
          Color Theme: Electric Cyan (#22D3EE) + Neon Purple (#8B5CF6 / #818CF8)
          ========================================================================= */}
      <div className="hero__background" aria-hidden="true">
        {/* Deep ambient background radial glows with mouse responsiveness */}
        <div className="hero__glow hero__glow--center" />
        <div className="hero__glow hero__glow--top" />
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />

        {/* Vertical cinematic stage spotlights */}
        <div className="hero__spotlight hero__spotlight--left" />
        <div className="hero__spotlight hero__spotlight--right" />

        {/* Left Symmetrical Futuristic Chevrons (framing the portrait) */}
        <div className="hero__chevrons-container hero__chevrons-container--left">
          <svg
            className="hero__chevrons-svg"
            viewBox="0 0 340 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chevGradCyanLeft" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="chevGradPurpleLeft" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1A2234" stopOpacity="0.05" />
              </linearGradient>
              <filter id="chevGlowLeft" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Outer Chevron */}
            <polyline
              points="320,30 200,220 320,410"
              stroke="url(#chevGradCyanLeft)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.35"
              className="hero__chevron-path hero__chevron-path--1"
            />
            {/* Mid-Outer Chevron */}
            <polyline
              points="260,55 150,220 260,385"
              stroke="url(#chevGradCyanLeft)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
              filter="url(#chevGlowLeft)"
              className="hero__chevron-path hero__chevron-path--2"
            />
            {/* Mid-Inner Chevron */}
            <polyline
              points="200,80 100,220 200,360"
              stroke="url(#chevGradPurpleLeft)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              filter="url(#chevGlowLeft)"
              className="hero__chevron-path hero__chevron-path--3"
            />
            {/* Inner Bold Neon Chevron */}
            <polyline
              points="140,105 50,220 140,335"
              stroke="#22D3EE"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.98"
              filter="url(#chevGlowLeft)"
              className="hero__chevron-path hero__chevron-path--4"
            />
          </svg>
        </div>

        {/* Right Symmetrical Futuristic Chevrons */}
        <div className="hero__chevrons-container hero__chevrons-container--right">
          <svg
            className="hero__chevrons-svg"
            viewBox="0 0 340 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chevGradCyanRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="chevGradPurpleRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1A2234" stopOpacity="0.05" />
              </linearGradient>
              <filter id="chevGlowRight" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Outer Chevron */}
            <polyline
              points="20,30 140,220 20,410"
              stroke="url(#chevGradCyanRight)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.35"
              className="hero__chevron-path hero__chevron-path--1"
            />
            {/* Mid-Outer Chevron */}
            <polyline
              points="80,55 190,220 80,385"
              stroke="url(#chevGradCyanRight)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
              filter="url(#chevGlowRight)"
              className="hero__chevron-path hero__chevron-path--2"
            />
            {/* Mid-Inner Chevron */}
            <polyline
              points="140,80 240,220 140,360"
              stroke="url(#chevGradPurpleRight)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              filter="url(#chevGlowRight)"
              className="hero__chevron-path hero__chevron-path--3"
            />
            {/* Inner Bold Neon Chevron */}
            <polyline
              points="200,105 290,220 200,335"
              stroke="#22D3EE"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.98"
              filter="url(#chevGlowRight)"
              className="hero__chevron-path hero__chevron-path--4"
            />
          </svg>
        </div>

        {/* Reflective stage floor line and horizon */}
        <div className="hero__stage-floor" />
      </div>

      {/* =========================================================================
          Layer 2: Hero Stage Content (Portrait + Typography + CTAs)
          ========================================================================= */}
      <div className="container hero__container">
        {/* Central Profile Portrait of Kalith Yuran (kaali_2.jpeg) */}
        <div className="hero__portrait-wrapper">
          <div className="hero__portrait-glow" aria-hidden="true" />
          <div className="hero__portrait-frame">
            <img
              src={kaaliImage}
              alt="Kalith Yuran - Founder & Creative Director"
              className="hero__portrait-img"
              width="1834"
              height="2304"
              loading="eager"
            />
            {/* Subtle interactive glossy sheen on portrait */}
            <div className="hero__portrait-sheen" aria-hidden="true" />
            {/* Bottom shadow blend */}
            <div className="hero__portrait-fade" aria-hidden="true" />
          </div>
        </div>

        {/* Personal Branding Identification */}
        <div className="hero__content">
          <div className="hero__brand-header hero__animate--item hero__animate--delay-1">
            <span className="hero__brand-name">KALITH YURAN</span>
            <span className="hero__brand-sep" aria-hidden="true">&bull;</span>
            <span className="hero__brand-title">KAALI PROJECTS</span>
          </div>

          {/* Professional Status Pill Badge */}
          <div className="hero__badge hero__animate--item hero__animate--delay-2" role="status">
            <span className="hero__badge-pulse" aria-hidden="true" />
            <span className="hero__badge-text">CREATOR &bull; STRATEGIST &bull; INNOVATOR</span>
          </div>

          {/* Main Headline with Word-by-Word Elegant Entrance */}
          <h1 className="hero__headline">
            <span className="hero__headline-row">
              <span className="hero__word-wrap">
                <span className="hero__word" style={{ animationDelay: '0.45s' }}>Turning</span>
              </span>{' '}
              <span className="hero__word-wrap">
                <span className="hero__word" style={{ animationDelay: '0.55s' }}>Vision</span>
              </span>{' '}
              <span className="hero__word-wrap">
                <span className="hero__word" style={{ animationDelay: '0.65s' }}>Into</span>
              </span>
            </span>
            <span className="hero__headline-row">
              <span className="hero__word-wrap">
                <span className="hero__word hero__word--gradient" style={{ animationDelay: '0.78s' }}>
                  Digital
                </span>
              </span>{' '}
              <span className="hero__word-wrap">
                <span className="hero__word hero__word--gradient" style={{ animationDelay: '0.90s' }}>
                  Experiences.
                </span>
              </span>
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="hero__description hero__animate--item hero__animate--delay-4">
            Creative director, brand strategist, and founder of Kaali Projects. Crafting cinematic campaigns, innovative digital experiences, and boundary-pushing creative legacies that elevate modern brands.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero__actions hero__animate--item hero__animate--delay-5">
            <a href="#work" className="hero__btn hero__btn--primary">
              <span className="hero__btn-text">EXPLORE MY WORK</span>
              <svg
                className="hero__btn-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="#contact" className="hero__btn hero__btn--secondary">
              <span className="hero__btn-text">LET&apos;S CONNECT</span>
              <svg
                className="hero__btn-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Smooth Animated Scroll Indicator */}
        <a
          href="#about"
          className="hero__scroll-indicator hero__animate--item hero__animate--delay-6"
          aria-label="Scroll down to About section"
        >
          <div className="hero__scroll-mouse" aria-hidden="true">
            <span className="hero__scroll-wheel" />
          </div>
          <span className="hero__scroll-text">EXPLORE</span>
        </a>
      </div>
    </section>
  )
}
