import { useEffect, useState } from 'react'
import './BackToTop.css'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const updateVisibility = () => setIsVisible(window.scrollY > 400)

        window.addEventListener('scroll', updateVisibility, { passive: true })
        updateVisibility()

        return () => window.removeEventListener('scroll', updateVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
        >
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 14 6-6 6 6M12 8v10" />
            </svg>
        </button>
    )
}