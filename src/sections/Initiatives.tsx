import { BookOpenCheck, GraduationCap, HandCoins, HeartHandshake, Laptop, Stethoscope, Users2, Utensils } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'
import students from '@/assets/indian-students.jpg'
import supplies from '@/assets/charity-supplies.jpg'

const education = [
  {
    icon: GraduationCap,
    title: 'Scholarships & Financial Aid',
    text: 'Merit and means-based scholarships that keep talented students in classrooms — from school to higher education.',
  },
  {
    icon: BookOpenCheck,
    title: 'Continuing Education',
    text: 'Flexible pathways that let discontinued learners and working professionals return to education and earn recognized qualifications.',
  },
  {
    icon: Laptop,
    title: 'Digital Literacy',
    text: 'Free computer and digital-skills training that prepares youth and adults for the modern workplace.',
  },
  {
    icon: HandCoins,
    title: 'Educational Sponsorships',
    text: 'Books, uniforms, fees and mentoring support for children from economically weaker families.',
  },
]

const charity = [
  {
    icon: HeartHandshake,
    title: 'Community Welfare',
    text: 'Grassroots programs that uplift underprivileged families across Ernakulam and beyond.',
  },
  {
    icon: Stethoscope,
    title: 'Health & Wellbeing Camps',
    text: 'Free medical check-ups, health awareness drives and wellness camps for underserved communities.',
  },
  {
    icon: Users2,
    title: 'Women & Youth Empowerment',
    text: 'Skill development, self-employment training and career guidance that build independent futures.',
  },
  {
    icon: Utensils,
    title: 'Relief & Rehabilitation',
    text: 'Timely support — food, essentials and rehabilitation assistance — for families in times of crisis.',
  },
]

function Pillar({
  heading,
  sub,
  items,
  image,
  imageAlt,
  reverse = false,
}: {
  heading: string
  sub: string
  items: typeof education
  image: string
  imageAlt: string
  reverse?: boolean
}) {
  return (
    <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? 'mt-20 lg:mt-24' : 'mt-16'}`}>
      <Reveal className={reverse ? 'lg:order-2' : ''}>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/15 to-gold-500/15 blur-xl" />
          <img
            src={image}
            alt={imageAlt}
            className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/20"
          />
        </div>
      </Reveal>
      <div className={reverse ? 'lg:order-1' : ''}>
        <Reveal>
          <h3 className="font-display text-3xl font-bold text-navy-900">{heading}</h3>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">{sub}</p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-xl bg-white p-5 ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-bold text-navy-900">{item.title}</div>
                <div className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.text}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Initiatives() {
  return (
    <section id="initiatives" className="bg-navy-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Education & Charity, Hand in Hand"
          description="Every rupee entrusted to the Foundation flows into two inseparable missions: opening access to education, and caring for the communities we serve."
        />
        <Pillar
          heading="Educational Initiatives"
          sub="Because talent is everywhere — but opportunity is not. Our programs bridge that gap."
          items={education}
          image={students}
          imageAlt="Students learning together"
        />
        <Pillar
          reverse
          heading="Charitable Initiatives"
          sub="Education thrives when communities thrive. Our welfare work supports the whole family."
          items={charity}
          image={supplies}
          imageAlt="Volunteers distributing school supplies to families"
        />
      </div>
    </section>
  )
}
