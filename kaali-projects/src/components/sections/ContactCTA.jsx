import SectionHeading from '../ui/SectionHeading.jsx'
import ContactForm from '../contact/ContactForm.jsx'
import './ContactCTA.css'

export default function ContactCTA() {
  return (
    <section className="contact-cta section">
      <div className="container">
        <SectionHeading title="Let's Talk" />
        <ContactForm />
      </div>
    </section>
  )
}
