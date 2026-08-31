import { BookOpen, HandHeart, Landmark, Lightbulb, ShieldCheck, Users } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const values = [
  {
    icon: Landmark,
    title: 'Stewardship',
    text: 'We safeguard the resources entrusted to us, reinvesting every surplus into teaching, research and student support.',
  },
  {
    icon: Lightbulb,
    title: 'Academic Excellence',
    text: 'We set uncompromising standards for learning and champion teaching, training and research that truly matter.',
  },
  {
    icon: Users,
    title: 'Access & Opportunity',
    text: 'Through scholarships and outreach, we open the doors of education to talented students from every background.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Governance',
    text: 'Transparent, accountable governance by an independent board of trustees guides every decision we make.',
  },
  {
    icon: HandHeart,
    title: 'Service to Society',
    text: 'Our work extends beyond campus — into schools, communities and partnerships that lift the region we serve.',
  },
  {
    icon: BookOpen,
    title: 'Lifelong Learning',
    text: 'From first-year undergraduates to returning professionals, we champion learning at every stage of life.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About the Foundation"
          title="A Trust Built on the Promise of Education"
          description="The Universal Education Foundation is based in Ernakulam, Kerala, and has a single, enduring mission: to make quality education accessible to all — through scholarships, continuing education programs and community welfare initiatives."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-navy-50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-navy-900/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
