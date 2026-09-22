import { valueCards } from '../../data/valueCards.js'
import './ValuePropCards.css'

export default function ValuePropCards() {
  return (
    <section className="value-cards section">
      <div className="container">
        <h2 className="value-cards__heading">Elevate Your Brand. Start Growing.</h2>

        <div className="value-cards__grid">
          {valueCards.map((card, index) => (
            <article key={card.tag} className="value-card">
              <span className="value-card__number">0{index + 1}</span>
              <span className="value-card__tag">{card.tag}</span>
              <div className={`value-card__icon value-card__icon--${card.icon}`} aria-hidden="true">
                <ValueIcon name={card.icon} />
              </div>
              <p className="value-card__description">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueIcon({ name }) {
  const icons = {
    discover: (
      <path d="M12 2 3 6v6c0 5 3.8 9 9 10 5.2-1 9-5 9-10V6l-9-4Z" />
    ),
    heartbeat: (
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    ),
    growth: (
      <path d="M4 19V9m6 10V5m6 14v-7" />
    ),
  }
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  )
}
