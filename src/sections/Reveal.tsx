import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export function Reveal({ children, delay = 0, className, y = 32 }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
  align?: 'center' | 'left'
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
          <span className="h-px w-8 bg-gold-500" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-gold-500" />}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-navy-100' : 'text-slate-600'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
