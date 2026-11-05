import { services } from '../../data/services.js'
import Button from '../ui/Button.jsx'
import './ServicesShowcase.css'

export default function ServicesShowcase() {
  return (
    <section className="services-showcase section" id="services">
      <div className="container services-showcase__grid">
        <div className="services-showcase__intro reveal-on-scroll">
          <span className="services-showcase__eyebrow">WHAT WE DELIVER</span>
          <h2>Transforming Ideas into Results</h2>
          <p>
            Our campaigns drive meaningful results, turning your goals into
            measurable achievements with cinematic precision.
          </p>
          <Button as="anchor" href="#contact" variant="ghost" className="services-showcase__cta">
            See All Services
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="services-showcase__cta-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
        </div>

        <ul className="services-showcase__list" role="list">
          {services.map((service, i) => (
            <li
              key={service.slug}
              className={`services-showcase__row reveal-on-scroll reveal-delay-${(i % 4) + 1}`}
            >
              <span className="services-showcase__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="services-showcase__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="services-showcase__arrow" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
