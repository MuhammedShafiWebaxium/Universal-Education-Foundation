import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const items = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [
      'Universal Education Foundation',
      'A Public Charitable Trust',
      '3rd Floor, Room No. 67/1057-A,',
      'Paramara Road, North Square Building,',
      'Ernakulam, Kerala – 682018',
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98950 90776', 'Mon–Fri, 9:00 AM – 5:00 PM'],
  },
  {
    icon: Mail,
    title: 'Write to Us',
    lines: ['info@universaledufoundation.org'],
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-navy-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="We'd Love to Hear from You"
          description="Whether you're a prospective student, a parent, an alumnus or a partner institution — the Foundation's doors are always open."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900">{item.title}</h3>
                <div className="mt-3 space-y-1.5">
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-slate-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-navy-900 p-8 text-center sm:p-10">
            <Clock className="mx-auto h-8 w-8 text-gold-400" />
            <h3 className="mt-4 font-display text-2xl font-bold text-white">Office Hours</h3>
            <p className="mt-3 leading-relaxed text-navy-200">
              The Foundation's administrative office in Ernakulam is open Monday through Friday,
              9:00 AM to 5:00 PM. For enquiries outside office hours, write to us and our team will
              respond within one working day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
