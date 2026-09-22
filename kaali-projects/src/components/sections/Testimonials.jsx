import { testimonials } from '../../data/testimonials.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <SectionHeading
          title="What Clients Say. Our Impact in Action."
          align="left"
        />

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card">
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
