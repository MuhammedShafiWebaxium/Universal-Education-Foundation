import { ArrowRight, CalendarDays } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'
import scholarship from '@/assets/scholarship.jpg'
import healthCamp from '@/assets/charity-health.jpg'
import learners from '@/assets/indian-learners.jpg'

const news = [
  {
    image: scholarship,
    date: 'June 14, 2026',
    category: 'Scholarships',
    title: 'Annual Scholarship Distribution Ceremony Held in Ernakulam',
    text: 'The Foundation awarded scholarships to hundreds of deserving students from economically weaker families at its annual ceremony.',
  },
  {
    image: healthCamp,
    date: 'May 28, 2026',
    category: 'Community',
    title: 'Free Health Camp Serves Over 500 Residents',
    text: 'Volunteer doctors and nurses provided free check-ups, medicines and health guidance at the Foundation\u2019s latest community medical camp.',
  },
  {
    image: learners,
    date: 'May 02, 2026',
    category: 'Continuing Education',
    title: 'Enrolment Opens for the Continuing Education Program',
    text: 'Discontinued learners and working professionals can now apply for RPL, CRP, ACS, RPS and equivalency pathways.',
  },
]

export function News() {
  return (
    <section id="news" className="bg-navy-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="News & Events"
          title="The Latest from the Foundation"
          description="Milestones, programs and stories from across the Universal Education Foundation's educational and charitable work."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.12}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/15">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
                    {n.category}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <CalendarDays className="h-4 w-4 text-gold-600" />
                    {n.date}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-primary">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{n.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
