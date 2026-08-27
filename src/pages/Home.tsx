import { Navbar } from '@/sections/Navbar'
import { Hero } from '@/sections/Hero'
import { Stats } from '@/sections/Stats'
import { About } from '@/sections/About'
import { Initiatives } from '@/sections/Initiatives'
import { Charity } from '@/sections/Charity'
import { Donate } from '@/sections/Donate'
import { News } from '@/sections/News'
import { CTA } from '@/sections/CTA'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Initiatives />
        <Charity />
        <Donate />
        <News />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
