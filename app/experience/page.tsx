import { OrgLogo } from '@/components/OrgLogo'

const experiences = [
  {
    logo: '/logos/cutc_logo.jpg',
    initials: 'CUTC',
    org: 'CUTC Foundation',
    role: 'Finance Lead + Outreach',
    period: 'Jun 2025 – Present',
    description: 'Manage $80K in funds for Canada\'s largest student-run tech conference, reaching 3K students per year.',
  },
  {
    logo: '/logos/algorithmalchemsits_logo.png',
    initials: 'AA',
    org: 'Algorithm Alchemists',
    role: 'President & Founder',
    period: 'Sep 2023 – Present',
    description: 'Lead a 20-member team at a coding nonprofit providing free coding education across Canada and reaching 100K+ students.',
  },
  {
    logo: '/logos/hack404_logo.jpg',
    initials: 'H404',
    org: 'Hack404',
    role: 'Logistics Organizer',
    period: 'Mar 2025 – Jul 2025',
    description: '36-hour hackathon at UofT St. George with 200+ participants, raising $25K in sponsorships and coordinating event logistics.',
  },
  {
    logo: '/logos/10xhub_logo.png',
    initials: '10X',
    org: '10X Hub',
    role: 'Web Developer',
    period: 'Jul 2025 – Aug 2025',
    description: 'Redeveloped the Canadian Learning Trust website for 10K+ monthly visitors, improving performance and UX.',
  },
  {
    logo: '/logos/fnja_logo.jpg',
    initials: 'FF',
    org: 'Le français pour l\'avenir',
    role: 'National French Ambassador',
    period: '2024 – 2025',
    description: 'Selected as one of 35 students across Canada to serve as a National French Ambassador.',
  },
]

const projects = [
  {
    name: 'King of the Ring',
    badge: '1st Place · EurekaHacks 2026',
    description: 'Motion-controlled boxing game where players use smartphones as controllers. Real-time multiplayer via WebSockets with a 3D split-screen arena built in Three.js.',
    tech: ['HTML/CSS/JS', 'Node.js', 'WebSockets', 'Three.js'],
    href: 'https://devpost.com/software/king-of-the-ring',
  },
  {
    name: 'Lotus',
    badge: 'GenAI Genesis 2026',
    description: 'Platform that transforms books into cinematic trailers within minutes using AI, no technical expertise needed.',
    tech: ['Next.js', 'FastAPI', 'Google Gemini', 'Supabase'],
    href: 'https://devpost.com/software/in-progress-w5skda',
  },
]

export default function ExperiencePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-10">
        Experience &amp; Projects
      </h1>

      {/* Experience list */}
      <ul className="space-y-8">
        {experiences.map(({ logo, initials, org, role, period, description }) => (
          <li key={`${org}-${role}`} className="flex gap-4">
            <OrgLogo src={logo} alt={org} initials={initials} size={44} />
            <div className="min-w-0">
              <p className="font-semibold text-slate-800">{role}</p>
              <p className="text-sm text-slate-500">{org} &middot; {period}</p>
              <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="my-12 border-t border-blue-100" />

      {/* Projects */}
      <h2 className="text-xl font-bold tracking-tight text-slate-800 mb-6">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map(({ name, badge, description, tech, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-blue-100 bg-white p-5 hover:bg-blue-50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                {name}
              </h3>
              <span className="text-xs text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                {badge}
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-3">{description}</p>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
