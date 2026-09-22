import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, socialLinks } from '../../data/navLinks.js'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem('kaali-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('kaali-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" aria-label="Kaali Projects home">
          KAALI <span>PROJECTS</span>
        </NavLink>

        <nav
          className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <ul className="navbar__social" aria-label="Social links">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="navbar__theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          >
            <ThemeIcon theme={theme} />
          </button>

          <button
            className="navbar__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function ThemeIcon({ theme }) {
  const path = theme === 'dark'
    ? 'M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z'
    : 'M12 3v2m0 14v2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42M3 12h2m14 0h2M5.64 18.36l1.42-1.42m9.88-9.88 1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

function SocialIcon({ name }) {
  // Minimal inline icon set — swap for an icon library if preferred.
  const paths = {
    youtube: 'M23 12s0-3.5-.4-5a3 3 0 0 0-2.1-2.1C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.4A3 3 0 0 0 1.4 7 31 31 0 0 0 1 12a31 31 0 0 0 .4 5 3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4A3 3 0 0 0 22.6 17c.4-1.5.4-5 .4-5ZM9.1 16V8l7.1 4-7.1 4Z',
    facebook: 'M13 22v-8h2.7l.4-3.1H13V9c0-.9.3-1.5 1.6-1.5H16V4.7A21 21 0 0 0 13.8 4.5c-2.2 0-3.7 1.3-3.7 3.8V11H7.5v3h2.6v8H13Z',
    phone: 'M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.3 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .6 3.6 1 1 0 0 1-.3 1l-2.2 2.2Z',
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
