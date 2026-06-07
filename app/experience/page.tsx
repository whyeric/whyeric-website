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
    logo: '/logos/algorithmalchemists_logo.png',
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
    description: 'Motion-controlled boxing game using smartphone sensors. Real-time multiplayer via WebSockets, 3D split-screen arena in Three.js. 1st place at EurekaHacks 2026.',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/637/939/datas/original.png',
    href: 'https://devpost.com/software/king-of-the-ring',
  },
  {
    name: 'Lotus',
    description: 'Platform that transforms books into cinematic trailers within minutes using AI. Built at GenAI Genesis 2026.',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/440/586/datas/original.png',
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
              <p className="font-semibold text-slate-800">{org}</p>
              <p className="text-sm text-slate-500">{role} &middot; {period}</p>
              <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="my-12 border-t border-blue-100" />

      {/* Projects */}
      <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">Projects</p>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map(({ name, description, image, href }) => (
          <div key={name}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
              <img
                src={image}
                alt={name}
                className="w-full aspect-video object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
              />
            </a>
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-slate-800">{name}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 underline decoration-dotted underline-offset-2 hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5"
              >
                devpost
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
