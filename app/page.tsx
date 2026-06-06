import Link from 'next/link'
import { InlineLogo } from '@/components/InlineLogo'

const highlights = [
  {
    logo: '/logos/eurekahacks_logo.jpg',
    initials: 'EH',
    text: <>1st Place @ <a href="https://devpost.com/software/king-of-the-ring" target="_blank" rel="noopener noreferrer" className="text-slate-600 underline decoration-dotted underline-offset-2 hover:text-blue-500 transition-colors">EurekaHacks 2026</a>, built King of the Ring, a motion-controlled multiplayer boxing game.</>,
  },
  {
    logo: '/logos/cutc_logo.jpg',
    initials: 'CUTC',
    text: <>Finance Lead @ <a href="https://cutc.ca/" target="_blank" rel="noopener noreferrer" className="text-slate-600 underline decoration-dotted underline-offset-2 hover:text-blue-500 transition-colors">CUTC Foundation</a>, Canada&apos;s largest undergraduate tech conference, managing $80K in funds.</>,
  },
  {
    logo: '/logos/hack404_logo.jpg',
    initials: 'H404',
    text: <>Logistics Organizer @ <a href="https://hack404.dev/" target="_blank" rel="noopener noreferrer" className="text-slate-600 underline decoration-dotted underline-offset-2 hover:text-blue-500 transition-colors">Hack404</a>, 36-hour hackathon at UofT with 200+ participants, raising $25K in sponsorships.</>,
  }
]

const socials = [
  { label: 'email', href: 'mailto:whyeric2020@gmail.com' },
  { label: 'twitter', href: 'https://x.com/whyeric2020' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/hongyi-eric-wang' },
  { label: 'github', href: 'https://github.com/whyeric' },
]

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="flex items-baseline justify-between">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">
          Eric Wang
        </h1>
        <div className="flex items-center gap-4">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm text-slate-400 underline decoration-dotted underline-offset-2 hover:text-blue-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-3 text-lg text-slate-500">
        CS &amp; Economics at{' '}
        <InlineLogo src="/logos/yale_logo.png" alt="Yale University" initials="Y" />
        {' '}Yale.
      </p>

      <p className="mt-8 text-sm font-medium text-slate-400 uppercase tracking-wider">
        Recent Highlights
      </p>

      <ul className="mt-3 space-y-3">
        {highlights.map(({ logo, initials, href, text }, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-500">
            <InlineLogo src={logo} alt={initials} initials={initials} />
            <span className="text-base leading-snug">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
