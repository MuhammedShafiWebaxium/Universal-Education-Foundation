import { Facebook, Instagram, Linkedin, MapPin, Twitter } from 'lucide-react'
import logoWhite from '@/assets/uef-logo-white.png'

const columns = [
  {
    title: 'The Foundation',
    links: ['About the Trust', 'Board of Trustees', 'Governance & Reports', 'News & Events'],
  },
  {
    title: 'Our Work',
    links: ['Educational Initiatives', 'Charitable Programs', 'Scholarships'],
  },
  {
    title: 'Get Involved',
    links: ['Donate', 'Volunteer', 'Partner with Us', 'Contact'],
  },
]

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={logoWhite} alt="Universal Education Foundation" className="h-11 w-auto" />
            <p className="mt-6 max-w-sm leading-relaxed text-navy-200">
              A Public Charitable Trust dedicated to advancing education, scholarships and community
              welfare — serving learners and families from Ernakulam, Kerala.
            </p>
            <p className="mt-5 flex max-w-sm items-start gap-2.5 text-sm leading-relaxed text-navy-200">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              3rd Floor, Room No. 67/1057-A, Paramara Road, North Square Building, Ernakulam, Kerala
              – 682018
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-navy-200 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-900"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-navy-200 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-navy-200">
            © {new Date().getFullYear()} Universal Education Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-navy-200">
            <a href="#top" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#top" className="transition-colors hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
