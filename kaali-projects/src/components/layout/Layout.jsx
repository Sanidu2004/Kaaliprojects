import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'

export default function Layout({ children }) {
  // Intersection Observer for high-performance scroll reveal animations
  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12,
      }
    )

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
