import { whyChooseUs } from '../../data/whyChooseUs.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="why-us section">
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            title="Why Choose Us?"
            subtitle="Visionary strategy for success — we think beyond the present, crafting strategies that ensure long-term results."
          />
        </div>

        <div className="why-us__grid">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.title}
              className={`why-us__item reveal-on-scroll reveal-delay-${(index % 4) + 1}`}
            >
              <div className="why-us__icon" aria-hidden="true">
                <WhyIcon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyIcon({ name }) {
  const icons = {
    award: <path d="M12 2 3 6v6c0 5 3.8 9 9 10 5.2-1 9-5 9-10V6l-9-4Z" />,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="16" cy="9" r="2.5" /><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14 15c2.8 0 5 1.8 5 5" /></>,
    chart: <path d="M4 19V9m6 10V5m6 14v-7" />,
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  )
}
