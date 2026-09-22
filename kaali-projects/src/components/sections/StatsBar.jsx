import { useEffect, useState } from 'react'
import { stats } from '../../data/stats.js'
import './StatsBar.css'

function AnimatedStat({ value }) {
  const match = value.match(/(\d+)(.*)/)
  const target = Number(match?.[1] ?? 0)
  const suffix = match?.[2] ?? ''
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      setCurrentValue(target)
      return undefined
    }

    let animationFrame
    const startTime = performance.now()
    const duration = 3000

    const updateValue = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCurrentValue(Math.round(target * easedProgress))

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue)
      }
    }

    animationFrame = window.requestAnimationFrame(updateValue)

    return () => window.cancelAnimationFrame(animationFrame)
  }, [target])

  return <span className="stats-bar__value">{currentValue}{suffix}</span>
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar__panel">
          {stats.map((s) => (
            <div key={s.label} className="stats-bar__item">
              <AnimatedStat value={s.value} />
              <span className="stats-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
