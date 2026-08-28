import { motion } from 'framer-motion'
import hero from '@/assets/hero-school.jpg'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden lg:items-center"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[center_32%] sm:bg-center lg:bg-[center_42%] xl:bg-[center_45%]"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-white/10 lg:bg-gradient-to-r lg:from-navy-900/40 lg:via-transparent lg:to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-24 sm:px-6 sm:pb-8 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-[40rem] rounded-2xl border border-white/50 bg-white/50 p-5 text-center shadow-xl shadow-navy-950/15 backdrop-blur-md sm:p-7 lg:mx-0 lg:p-8 lg:text-left"
        >
          <h1 className="whitespace-nowrap font-display text-[clamp(1.65rem,8vw,3.25rem)] font-bold leading-none tracking-[-0.035em] text-navy-900 lg:text-[3.5rem]">
            One with <span className="relative inline-block italic">
              <span className="relative z-10">humanity</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[0.06em] z-0 h-[0.3em] -rotate-1 rounded-sm bg-gold-500/70"
              />
            </span>
          </h1>

          <div className="mt-5 flex justify-center sm:mt-6 lg:justify-start">
            <a
              href="#about"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-navy-900 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-navy-900/20 transition-all hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-900"
            >
              About the Foundation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
