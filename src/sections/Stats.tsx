import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Reveal } from './Reveal'

function Counter({ target, suffix = '', duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 9, suffix: '', label: 'Years of Service', note: 'Advancing education since 2017' },
  { value: 12500, suffix: '+', label: 'Learners Supported', note: 'Across our programs & outreach' },
  { value: 2400, suffix: '+', label: 'Scholarships Awarded', note: 'To deserving students' },
  { value: 85, suffix: '+', label: 'Communities Reached', note: 'Through charitable initiatives' },
]

export function Stats() {
  return (
    <section className="relative bg-navy-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="relative px-6 py-12 text-center lg:py-16">
            <Reveal delay={i * 0.1}>
              <div className="font-display text-4xl font-bold text-gold-400 sm:text-5xl lg:text-6xl">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-white">
                {s.label}
              </div>
              <div className="mt-2 text-sm text-navy-200">{s.note}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
