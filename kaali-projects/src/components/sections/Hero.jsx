import Button from '../ui/Button.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero__inner">
        <h1 className="hero__headline">
          <span className="hero__faint">Building</span> Creative
          <br />
          <span className="hero__faint">Inspiring</span> Legacies{' '}
          <span className="hero__faint">Together</span>
        </h1>

        <p className="hero__subtext">
          We collaborate to craft inspiring, creative legacies that leave a lasting
          impact, ensuring your brand evolves and stands out for years to come.
        </p>

        <div className="hero__actions">
          <Button as="link" to="/work" variant="primary">Explore Our Work</Button>
          <Button as="link" to="/contact" variant="ghost">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}
