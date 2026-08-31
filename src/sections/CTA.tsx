import { ArrowRight, HandHeart, PhoneCall } from 'lucide-react'
import { Reveal } from './Reveal'
import hero from '@/assets/hero-campus.jpg'

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }} />
      <div className="absolute inset-0 bg-navy-950/85" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Give the Gift of <span className="italic text-gold-400">Education.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
            Your generosity funds scholarships, reopens classrooms for discontinued learners, and
            supports welfare programs across our communities. Join the Universal Education
            Foundation in making education a right — not a privilege.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#bank-account-details"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-navy-900 shadow-xl shadow-gold-500/25 transition-all hover:scale-105 hover:bg-gold-400"
            >
              <HandHeart className="h-5 w-5" />
              Donate Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <PhoneCall className="h-5 w-5" />
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
