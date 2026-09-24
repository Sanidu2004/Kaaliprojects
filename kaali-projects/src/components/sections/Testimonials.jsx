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

        <div className="testimonials__window" aria-label="Client testimonials">
          <div className="testimonials__track">
            <TestimonialSet />
            <TestimonialSet aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSet({ 'aria-hidden': ariaHidden }) {
  return (
    <div className="testimonials__set" aria-hidden={ariaHidden}>
      {testimonials.map((testimonial, index) => (
        <figure key={`${testimonial.name}-${index}`} className="testimonial-card">
          <div className="testimonial-card__media">
            {testimonial.image && (
              <img src={testimonial.image} alt={`${testimonial.name} profile`} />
            )}
            {!testimonial.image && <span>Client image</span>}
          </div>
          <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <figcaption>
            <span className="testimonial-card__name">{testimonial.name}</span>
            <span className="testimonial-card__role">{testimonial.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
