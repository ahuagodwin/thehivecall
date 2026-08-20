import { cn } from '@lib/utils'
import { SITE_CONFIG } from '@config/site.config'

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime">
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-ink" fill="none">
          <path
            d="M12 4V20M5.5 7.5L18.5 16.5M18.5 7.5L5.5 16.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          'font-display text-xl font-medium',
          light ? 'text-white' : 'text-ink'
        )}
      >
        {SITE_CONFIG.name}
      </span>
    </span>
  )
}
