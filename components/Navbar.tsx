'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'About' },
  { href: '/experience', label: 'Experience' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-end">
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  active
                    ? 'text-blue-500 font-medium'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
