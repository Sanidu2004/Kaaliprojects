import SectionHeading from '../ui/SectionHeading.jsx'
import ContactForm from '../contact/ContactForm.jsx'
import './ContactCTA.css'

export default function ContactCTA() {
  return (
    <section className="contact-cta section" id="contact">
      <div className="container reveal-on-scroll">
        <SectionHeading
          title="Let's Talk"
          subtitle="Ready to elevate your brand? Reach out and let's craft something unforgettable."
        />
        <ContactForm />
      </div>
    </section>
  )
}
