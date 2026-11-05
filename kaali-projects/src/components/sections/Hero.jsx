import kaaliImage from '../../assets/images/kaali_2.jpeg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero Introduction">
      {/* =========================================================================
          Layer 1: Futuristic Atmospheric Background with Symmetrical Chevrons
          Color Theme: Electric Cyan (#22D3EE) + Neon Purple (#8B5CF6 / #818CF8)
          ========================================================================= */}
      <div className="hero__background" aria-hidden="true">
        {/* Deep ambient background radial glows */}
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
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="chevGradPurpleLeft" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.3" />
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
              opacity="0.3"
            />
            {/* Mid-Outer Chevron */}
            <polyline
              points="260,55 150,220 260,385"
              stroke="url(#chevGradCyanLeft)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.55"
              filter="url(#chevGlowLeft)"
            />
            {/* Mid-Inner Chevron */}
            <polyline
              points="200,80 100,220 200,360"
              stroke="url(#chevGradPurpleLeft)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
              filter="url(#chevGlowLeft)"
            />
            {/* Inner Bold Neon Chevron */}
            <polyline
              points="140,105 50,220 140,335"
              stroke="#22D3EE"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
              filter="url(#chevGlowLeft)"
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
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="chevGradPurpleRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.3" />
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
              opacity="0.3"
            />
            {/* Mid-Outer Chevron */}
            <polyline
              points="80,55 190,220 80,385"
              stroke="url(#chevGradCyanRight)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.55"
              filter="url(#chevGlowRight)"
            />
            {/* Mid-Inner Chevron */}
            <polyline
              points="140,80 240,220 140,360"
              stroke="url(#chevGradPurpleRight)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
              filter="url(#chevGlowRight)"
            />
            {/* Inner Bold Neon Chevron */}
            <polyline
              points="200,105 290,220 200,335"
              stroke="#22D3EE"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
              filter="url(#chevGlowRight)"
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
            {/* Bottom shadow blend */}
            <div className="hero__portrait-fade" aria-hidden="true" />
          </div>
        </div>

        {/* Personal Branding Identification */}
        <div className="hero__content">
          <div className="hero__brand-header">
            <span className="hero__brand-name">KALITH YURAN</span>
            <span className="hero__brand-sep" aria-hidden="true">&bull;</span>
            <span className="hero__brand-title">KAALI PROJECTS</span>
          </div>

          {/* Professional Status Pill Badge */}
          <div className="hero__badge" role="status">
            <span className="hero__badge-pulse" aria-hidden="true" />
            <span className="hero__badge-text">CREATOR &bull; STRATEGIST &bull; INNOVATOR</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero__headline">
            <span className="hero__headline-intro">Turning Vision Into</span>
            <span className="hero__headline-lead">Digital Experiences.</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero__description">
            Creative director, brand strategist, and founder of Kaali Projects. Crafting cinematic campaigns, innovative digital experiences, and boundary-pushing creative legacies that elevate modern brands.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero__actions">
            <a href="#work" className="hero__btn hero__btn--primary">
              <span>EXPLORE MY WORK</span>
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
              <span>LET&apos;S CONNECT</span>
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
      </div>
    </section>
  )
}
