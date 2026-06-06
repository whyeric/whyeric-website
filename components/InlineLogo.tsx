'use client'

type Props = { src: string; alt: string; initials: string }

export function InlineLogo({ src, alt, initials }: Props) {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded align-middle mx-0.5 overflow-hidden bg-blue-50 border border-blue-100 flex-shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      <span className="text-[8px] font-semibold text-blue-400" style={{ display: 'none' }}>
        {initials}
      </span>
    </span>
  )
}
