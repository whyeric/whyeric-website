'use client'

type Props = {
  src: string
  alt: string
  initials: string
  size?: number
}

export function OrgLogo({ src, alt, initials, size = 40 }: Props) {
  return (
    <div
      className="rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain p-1"
        onError={(e) => {
          const img = e.currentTarget
          img.style.display = 'none'
          const fallback = img.nextElementSibling as HTMLElement | null
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      <span
        className="text-xs font-semibold text-blue-400 items-center justify-center leading-none text-center px-1"
        style={{ display: 'none' }}
      >
        {initials}
      </span>
    </div>
  )
}
