import { services } from '../../data/services.js'
import Button from '../ui/Button.jsx'
import './ServicesShowcase.css'

export default function ServicesShowcase() {
  return (
    <section className="services-showcase section">
      <div className="container services-showcase__grid">
        <div className="services-showcase__intro">
          <h2>Transforming Ideas into Results</h2>
          <p>
            Our campaigns drive meaningful results, turning your goals into
            measurable achievements.
          </p>
          <Button as="anchor" href="#services" variant="ghost">See All Services</Button>
        </div>

        <ul className="services-showcase__list">
          {services.map((service, i) => (
            <li key={service.slug} className="services-showcase__row">
              <span className="services-showcase__index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
