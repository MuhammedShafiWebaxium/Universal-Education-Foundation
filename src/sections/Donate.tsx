import { Copy, Check, HandHeart, Landmark } from 'lucide-react'
import { useState } from 'react'
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
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 py-2.5 last:border-0">
      <div>
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-navy-200">{label}</div>
        <div className="mt-0.5 font-mono text-sm font-semibold text-white sm:text-base">{value}</div>
      </div>
      <button
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-navy-200 transition-colors hover:border-gold-400 hover:text-gold-400"
      >
        {copied ? <Check className="h-4 w-4 text-gold-400" /> : <Copy className="h-4 w-4" />}
      </button>
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
            <div className="rounded-2xl bg-navy-900 p-5 shadow-xl shadow-navy-900/20 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Bank Account Details</h3>
                  <p className="text-xs text-navy-200 sm:text-sm">Direct transfer / NEFT / RTGS / IMPS / SWIFT</p>
                </div>
              </div>
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
