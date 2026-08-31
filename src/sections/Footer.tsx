import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoWhite from "@/assets/uef-logo-white.png";

const columns = [
  {
    title: "The Foundation",
    links: [
      { label: "About the Trust", href: "#about" },
      { label: "Board of Trustees", href: "#about" },
      { label: "Governance & Reports", href: "#about" },
      { label: "News & Events", href: "#news" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { label: "Educational Initiatives", href: "#initiatives" },
      { label: "Charitable Programs", href: "#charity" },
      { label: "Scholarships", href: "#initiatives" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "#bank-account-details" },
      { label: "Volunteer", href: "#contact" },
      { label: "Partner with Us", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img
              src={logoWhite}
              alt="Universal Education Foundation"
              className="h-11 w-auto"
            />
            <p className="mt-6 max-w-sm leading-relaxed text-navy-200">
              A Public Charitable Trust dedicated to advancing education,
              scholarships and community welfare — serving learners and families
              from Ernakulam, Kerala.
            </p>

            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#contact"
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
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-navy-200 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-navy-200">
            © {new Date().getFullYear()} Universal Education Foundation. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
