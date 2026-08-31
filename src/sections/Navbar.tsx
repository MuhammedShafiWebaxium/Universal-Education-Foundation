import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/uef-logo.png'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#initiatives' },
  { label: 'Charity', href: '#charity' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-lg shadow-navy-900/5 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Universal Education Foundation"
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-navy-900 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#bank-account-details"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 transition-transform hover:scale-105 hover:bg-gold-400"
          >
            Donate Now
          </a>
        </div>

        <button
          className="text-navy-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-navy-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#bank-account-details"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-900"
          >
            Donate Now
          </a>
        </div>
      )}
    </header>
  )
}
