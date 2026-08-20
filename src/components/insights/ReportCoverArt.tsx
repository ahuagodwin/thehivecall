import { AsteriskIcon } from '@common/Icon'

export function ReportCoverArt({ title, year = '2025' }: { title: string; year?: string }) {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-cream-dark">
      {/* back layers of the stack */}
      <div className="absolute h-44 w-32 -rotate-6 rounded-lg bg-lime/70 shadow-md" />
      <div className="absolute h-44 w-32 rotate-3 rounded-lg bg-ink-soft shadow-md" />

      {/* front cover */}
      <div className="relative flex h-44 w-32 flex-col justify-between rounded-lg bg-ink p-3.5 text-white shadow-lg">
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/50">
          Report
        </span>
        <p className="font-display text-[13px] font-medium leading-snug">{title}</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold text-white/60">{year}</p>
            <p className="text-[10px] font-semibold text-white/60">Report</p>
          </div>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime text-ink">
            <AsteriskIcon className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  )
}
