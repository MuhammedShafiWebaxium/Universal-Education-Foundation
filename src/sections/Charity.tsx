import { HandHeart, HeartHandshake, LifeBuoy, Shirt, Stethoscope, Users2, Utensils } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'
import food from '@/assets/charity-food.jpg'
import health from '@/assets/charity-health.jpg'
import elderly from '@/assets/charity-elderly.jpg'
import women from '@/assets/charity-women.jpg'

const gallery = [
  { image: food, caption: 'Food & Grocery Distribution' },
  { image: health, caption: 'Free Medical Camps' },
  { image: elderly, caption: 'Care for the Elderly' },
  { image: women, caption: "Women's Skill Development" },
]

const programs = [
  {
    icon: Utensils,
    title: 'Annadanam — Food & Nutrition',
    text: 'Free meal programs and monthly grocery kits for families facing hardship, because no one in our community should go hungry.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Outreach',
    text: 'Free medical camps, health check-ups, medicines and health-awareness drives across underserved neighbourhoods.',
  },
  {
    icon: HeartHandshake,
    title: 'Elderly & Palliative Care',
    text: 'Companionship, essentials and care support for senior citizens and residents of old-age homes.',
  },
  {
    icon: Users2,
    title: 'Women Empowerment',
    text: 'Vocational training — tailoring, crafts and self-employment skills — that helps women build independent livelihoods.',
  },
  {
    icon: Shirt,
    title: 'Shelter & Essentials',
    text: 'Clothing, blankets, hygiene kits and household essentials distributed to families in need throughout the year.',
  },
  {
    icon: LifeBuoy,
    title: 'Disaster Relief & Rehabilitation',
    text: 'Rapid response during floods and emergencies — food, shelter and rehabilitation support to help families rebuild.',
  },
]

const impact = [
  { value: '10,000+', label: 'Grocery kits distributed' },
  { value: '120+', label: 'Free health camps held' },
  { value: '800+', label: 'Families supported yearly' },
  { value: '300+', label: 'Active volunteers' },
]

export function Charity() {
  return (
    <section id="charity" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Charitable Work"
          title="Compassion in Action"
          description="Charity is not a side project of the Foundation — it is our beating heart. From food drives to health camps, our volunteers work on the ground across Kerala, caring for those who need it most."
        />

        {/* Photo gallery */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {gallery.map((g, i) => (
            <Reveal key={g.caption} delay={i * 0.1}>
              <figure className="group relative overflow-hidden rounded-2xl shadow-md">
                <img
                  src={g.image}
                  alt={g.caption}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-[3/3.4]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent px-4 pb-4 pt-12 text-sm font-bold text-white">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Impact strip */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-navy-900 px-8 py-10 lg:grid-cols-4">
            {impact.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold text-gold-400 sm:text-4xl">{s.value}</div>
                <div className="mt-2 text-sm font-medium text-navy-100">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Programs */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-navy-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-xl hover:shadow-navy-900/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-gold-400">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-700 px-8 py-10 sm:flex-row lg:px-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Every helping hand makes a difference.
              </h3>
              <p className="mt-2 max-w-xl text-navy-100">
                Join our volunteer family, or support our charitable programs with a donation —
                together we can reach many more lives.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#donate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-900 transition-all hover:scale-105 hover:bg-gold-400"
              >
                <HandHeart className="h-5 w-5" />
                Donate
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                Volunteer with Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
