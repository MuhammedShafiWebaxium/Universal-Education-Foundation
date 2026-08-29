import heroMobile from '@/assets/ChatGPT Image Aug 29, 2026, 02_41_51 PM.png'
import heroDesktop from '@/assets/ChatGPT Image Aug 29, 2026, 03_07_47 PM.png'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <picture>
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="A teacher learning with four schoolchildren - education for everyone"
          className="block h-auto w-full"
          fetchPriority="high"
        />
      </picture>

      <a
        href="#about"
        aria-label="About the foundation"
        className="absolute bottom-[7.6%] left-[7.2%] h-[7.9%] w-[60%] rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white lg:bottom-[4.7%] lg:left-[4.7%] lg:h-[7.5%] lg:w-[23.9%]"
      />
    </section>
  )
}
