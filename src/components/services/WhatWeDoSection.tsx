import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeUp } from '@constants/motion'
import { WHAT_WE_DO } from '@/data/services-page.data'

export function WhatWeDoSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>{WHAT_WE_DO.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-md font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                {WHAT_WE_DO.headingPrefix}
                <span className="text-lime-dark">{WHAT_WE_DO.headingAccent}</span>
                {WHAT_WE_DO.headingSuffix}
              </h2>
            </Reveal>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerFast}
            className="space-y-5"
          >
            {WHAT_WE_DO.paragraphs.map((paragraph) => (
              <motion.p key={paragraph} variants={fadeUp} className="text-ink/60">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerFast}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-ink/10 pt-12 md:grid-cols-4"
        >
          {WHAT_WE_DO.stats.map((stat) => (
            <motion.div key={stat.id} variants={fadeUp}>
              <p className="inline-flex items-baseline rounded-xl bg-cream px-4 py-2.5 font-display text-2xl font-medium text-ink md:text-3xl">
                {stat.value}
                {stat.suffix && <span className="text-lime-dark">{stat.suffix}</span>}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
