import SectionHeading from '../components/ui/SectionHeading.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Let's Talk"
          subtitle="Have a project in mind? Tell us a little about it and we'll get back to you."
        />
        <ContactForm />
      </div>
    </section>
  )
}
