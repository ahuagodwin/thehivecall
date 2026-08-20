import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { AsteriskIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { EASE_OUT } from '@constants/motion'
import { cn } from '@lib/utils'
import { HISTORY_ERAS, HISTORY_SECTION } from '@data/about.data'

export function HistorySection() {
  const [activeEra, setActiveEra] = useState(0)
  const era = HISTORY_ERAS[activeEra]

  return (
    <section className="bg-white">
      <Container className="flex flex-col items-center py-16 text-center md:py-20">
        <Reveal>
          <Eyebrow>{HISTORY_SECTION.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {HISTORY_SECTION.headingPrefix}
            <span className="text-lime-dark">{HISTORY_SECTION.headingAccent}</span>
          </h2>
        </Reveal>
      </Container>

      <div className="relative">
        <img
          src={HISTORY_SECTION.image}
          alt="Chiscript through the years"
          className="h-[420px] w-full object-cover grayscale md:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="absolute inset-x-6 bottom-0 translate-y-1/2 md:inset-x-16">
          <Container className="!px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={era.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="max-w-md rounded-2xl bg-gradient-to-br from-white to-cream p-7 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <Eyebrow>{era.badge}</Eyebrow>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-ink">
                    <AsteriskIcon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">{era.title}</h3>  
                   <article className="ml-auto max-w-lg py-5 text-ink/70">
                      {era.description}
                    </article>
              </motion.div>
            </AnimatePresence>
          </Container>
        </div>

        <div className="absolute right-6 top-6 flex gap-2 md:right-16 md:top-8">
          {HISTORY_ERAS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveEra(index)}
              className={cn(
                'rounded-full px-4 py-2.5 text-sm font-semibold transition-colors',
                index === activeEra
                  ? 'bg-white text-ink'
                  : 'bg-black/30 text-white/80 backdrop-blur-sm hover:bg-black/40'
              )}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
