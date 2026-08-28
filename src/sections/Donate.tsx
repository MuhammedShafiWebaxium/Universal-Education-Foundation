import { HandHeart } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const bankDetails = [
  { label: 'Account Name', value: 'Universal Education Foundation' },
  { label: 'Account Number', value: '10040200052417' },
  { label: 'IFSC Code', value: 'FDRL0001004' },
  { label: 'Branch Name', value: 'Ernakulam North' },
  { label: 'SWIFT Code', value: 'FDRLINBBIBD' },
  { label: 'MICR Code', value: 'FDRL0001004' },
]

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-0.5 text-sm font-semibold text-navy-900 sm:text-base">{value}</div>
    </div>
  )
}

export function Donate() {
  return (
    <section id="donate" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Support Us"
          title="Your Donation Changes Lives"
          description="Every contribution — large or small — goes directly toward scholarships, continuing education and community welfare. Donate directly to the Foundation's bank account below."
        />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-navy-50 p-9 ring-1 ring-navy-100">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500 text-navy-900">
                  <HandHeart className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                  Why give to the Foundation?
                </h3>
                <ul className="mt-5 space-y-4">
                  {[
                    'Fund scholarships for deserving students from underprivileged families',
                    'Help discontinued learners return to education through our Continuing Education Program',
                    'Support health camps, skill training and welfare initiatives across Kerala',
                  ].map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 rounded-xl bg-white p-4 text-sm leading-relaxed text-slate-600 ring-1 ring-navy-100">
                The Universal Education Foundation is a registered Public Charitable Trust. For
                donation receipts and acknowledgements, please share your transaction details at{' '}
                <span className="font-semibold text-navy-900">info@universaledufoundation.org</span>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-display text-xl font-bold text-navy-900">Bank Account Details</h3>
              <p className="mt-1 text-sm text-slate-500">Direct transfer / NEFT / RTGS / IMPS / SWIFT</p>
              <div className="mt-3">
                {bankDetails.map((d) => (
                  <DetailRow key={d.label} label={d.label} value={d.value} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
