import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { EASE_OUT } from '@constants/motion'
import { INDUSTRIES_HERO, INDUSTRY_CARDS } from '@data/industries-page.data'

const marqueeItems = [...INDUSTRY_CARDS, ...INDUSTRY_CARDS]

export function IndustriesHero() {
  return (
    <section className="overflow-hidden bg-ink pt-20 md:pt-24">
      <Container className="flex flex-col items-center pb-16 pt-20 text-center md:pb-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <Eyebrow tone="dark">{INDUSTRIES_HERO.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT }}
          className="mt-6 max-w-lg font-display text-3xl font-medium leading-tight text-white md:text-4xl"
        >
          {INDUSTRIES_HERO.headingPrefix}
          <span className="text-lime">{INDUSTRIES_HERO.headingAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE_OUT }}
          className="mt-6 max-w-xl text-lg text-white/60"
        >
          {INDUSTRIES_HERO.subtitle}
        </motion.p>
      </Container>

      <div className="relative overflow-hidden border-t border-white/10 py-8">
        <motion.div
          className="flex w-max shrink-0 items-center gap-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeItems.map((item, index) => (
            <span
              key={`${item.id}-${index}`}
              className="flex items-center gap-10 font-display text-xl font-medium text-white/25 md:text-2xl"
            >
              {item.title}
              <span className="text-lime/40">*</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
