import { cn } from '@lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  tone?: 'light' | 'dark'
  className?: string
}

export function Eyebrow({ children, tone = 'light', className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]',
        tone === 'light'
          ? 'border-ink/15 text-ink/70'
          : 'border-white/25 text-white/80',
        className
      )}
    >
      {children}
    </span>
  )
}
