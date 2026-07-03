import Link from 'next/link'
import { InlineLogo } from '@/components/InlineLogo'

const highlights = [
  {
    logo: '/logos/eurekahacks_logo.jpg',
    initials: 'EH',
    role: '1st Place',
    org: 'EurekaHacks 2026',
    orgUrl: 'https://devpost.com/software/king-of-the-ring',
    description: 'built King of the Ring, a motion-controlled multiplayer boxing game.',
  },
  {
    logo: '/logos/cutc_logo.jpg',
    initials: 'CUTC',
    role: 'Finance Lead',
    org: 'CUTC Foundation',
    orgUrl: 'https://cutc.ca/',
    description: "Canada's largest undergraduate tech conference, managing $80K in funds.",
  },
  {
    logo: '/logos/hack404_logo.jpg',
    initials: 'H404',
    role: 'Logistics Organizer',
    org: 'Hack404',
    orgUrl: 'https://hack404.dev/',
    description: '36-hour hackathon at UofT with 200+ participants, raising $25K in sponsorships.',
  },
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
          Eric (Hong Yi) Wang
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
        CS &amp; Mathematics at{' '}
        <InlineLogo src="/logos/yale_logo.png" alt="Yale University" initials="Y" />
        {' '}Yale.
      </p>

      <p className="mt-8 text-sm font-medium text-slate-400 uppercase tracking-wider">
        Recent Highlights
      </p>

      <ul className="mt-3 space-y-3">
        {highlights.map(({ logo, initials, role, org, orgUrl, description }) => (
          <li key={org} className="flex items-start gap-2">
            <InlineLogo src={logo} alt={org} initials={initials} />
            <div>
              <p className="text-base text-slate-600 leading-snug">
                {role} @{' '}
                <a
                  href={orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted underline-offset-2 hover:text-blue-500 transition-colors"
                >
                  {org}
                </a>
              </p>
              <p className="text-sm text-slate-400 mt-0.5">{description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          href="/experience"
          className="text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors"
        >
          View my experience &rarr;
        </Link>
      </div>
    </section>
  )
}
