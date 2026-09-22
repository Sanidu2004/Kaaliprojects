import { useState } from 'react'
import Button from '../ui/Button.jsx'
import './ContactForm.css'

const initialState = { name: '', phone: '', email: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      // Replace with a real endpoint (e.g. your backend, Formspree, etc.)
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      setValues(initialState)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Name*</label>
          <input id="name" name="name" required value={values.name} onChange={handleChange} />
        </div>
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number*</label>
          <input id="phone" name="phone" required value={values.phone} onChange={handleChange} />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email*</label>
        <input id="email" type="email" name="email" required value={values.email} onChange={handleChange} />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Tell us a little bit about yourself*</label>
        <textarea id="message" name="message" rows={4} required value={values.message} onChange={handleChange} />
      </div>

      <Button type="submit" variant="primary">
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </Button>

      {status === 'success' && <p className="contact-form__status">Thanks — we'll be in touch shortly.</p>}
      {status === 'error' && <p className="contact-form__status contact-form__status--error">Something went wrong. Please try again.</p>}
    </form>
  )
}
