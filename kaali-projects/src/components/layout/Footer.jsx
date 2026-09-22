import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">KAALI PROJECTS</p>

        <div className="footer__columns">
          <div className="footer__col">
            <h4>About Us</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">FAQs</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Connect With Us</h4>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get in Touch</h4>
            <p><a href="mailto:support@kaaliprojects.com">support@kaaliprojects.com</a></p>
            <p><a href="tel:+94775867752">Phone: +94 77 58 67 752</a></p>
          </div>
        </div>

        <p className="footer__copy">© {new Date().getFullYear()} KAALI PROJECTS. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
