import './SocialCTA.css'

export default function SocialCTA() {
  return (
    <section className="social-cta section">
      <div className="container social-cta__inner reveal-on-scroll">
        <h2>Stay tuned on YouTube</h2>
        <a
          className="social-cta__play"
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Watch on YouTube"
        >
          <div className="social-cta__play-ripple" aria-hidden="true" />
          <svg width="46" height="46" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 16V8l8 4-8 4Z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
