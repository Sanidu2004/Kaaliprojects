import { useEffect, useState } from 'react'
import './SplashScreen.css'

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const hideTimer = window.setTimeout(() => setIsVisible(false), 2000)

        return () => window.clearTimeout(hideTimer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="splash-screen" role="status" aria-label="Loading Kaali Projects">
            <div className="splash-screen__content">
                <div className="splash-screen__mark" aria-hidden="true">
                    K
                </div>
                <p className="splash-screen__eyebrow">Independent creative studio</p>
                <h1 className="splash-screen__title">
                    KAALI<span>PROJECTS</span>
                </h1>
                <div className="splash-screen__progress" aria-hidden="true">
                    <span />
                </div>
            </div>
        </div>
    )
}