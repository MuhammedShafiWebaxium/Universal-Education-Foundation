import { motion } from 'framer-motion'
import hero from '@/assets/hero-school.jpg'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-44 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-2xl shadow-navy-900/15 backdrop-blur-md sm:p-12 sm:text-left"
        >
          <h1 className="font-display text-5xl font-bold leading-[1.08] text-navy-900 sm:text-6xl lg:text-7xl">
            One with{' '}
            <span className="relative inline-block italic">
              <span className="relative z-10">humanity</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 z-0 h-[0.34em] -rotate-1 rounded-sm bg-gold-500/70"
              />
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-navy-900/20 transition-all hover:scale-105 hover:bg-navy-800"
            >
              About the Foundation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
