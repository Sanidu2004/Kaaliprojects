import './SocialCTA.css'

export default function SocialCTA() {
  return (
    <section className="social-cta section">
      <div className="container social-cta__inner">
        <h2>Stay tuned on YouTube</h2>
        <a
          className="social-cta__play"
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Watch on YouTube"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="var(--color-white)">
            <path d="M8 16V8l8 4-8 4Z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
