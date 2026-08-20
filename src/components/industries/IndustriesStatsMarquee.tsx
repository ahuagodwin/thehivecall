import { motion } from 'framer-motion'
import { INDUSTRIES_TICKER } from '@data/industries-page.data'

const tickerItems = [...INDUSTRIES_TICKER, ...INDUSTRIES_TICKER]

export function IndustriesStatsMarquee() {
  return (
    <section className="overflow-hidden bg-lime py-6">
      <motion.div
        className="flex w-max items-center gap-12"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        {tickerItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-12 text-sm font-semibold uppercase tracking-wide text-ink"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
          </span>
        ))}
      </motion.div>
    </section>
  )
}
