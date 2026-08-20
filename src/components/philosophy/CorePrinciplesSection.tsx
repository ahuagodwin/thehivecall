import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { AsteriskIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import { CORE_PRINCIPLES } from '@/data/philosophy-page.data'

export function CorePrinciplesSection() {
  const { purposeCard, commitmentCard } = CORE_PRINCIPLES

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>{CORE_PRINCIPLES.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                {CORE_PRINCIPLES.headingPrefix}
                <span className="text-lime-dark">{CORE_PRINCIPLES.headingAccent}</span>
                {CORE_PRINCIPLES.headingSuffix}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="text-ink/60">{CORE_PRINCIPLES.paragraph}</p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="flex min-h-[420px] flex-col justify-between rounded-[28px] bg-ink p-8 text-white"
          >
            <div className="flex items-start justify-between">
              <Eyebrow tone="dark">{purposeCard.tag}</Eyebrow>
              <AsteriskIcon className="h-6 w-6 text-lime" />
            </div>
            <h3 className="font-display text-2xl font-medium leading-snug">{purposeCard.title}</h3>
            <p className="text-sm leading-relaxed text-white/70">{purposeCard.description}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-[28px]">
            <img
              src={CORE_PRINCIPLES.centerImage}
              alt="A Chiscript advisor meeting with a client team"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex min-h-[420px] flex-col justify-between rounded-[28px] bg-gradient-to-br from-lime to-lime-dark p-8"
          >
            <div className="flex items-start justify-between">
              <Eyebrow className="border-ink/20">{commitmentCard.tag}</Eyebrow>
              <AsteriskIcon className="h-6 w-6 text-ink" />
            </div>
            <h3 className="font-display text-2xl font-medium leading-snug text-ink">
              {commitmentCard.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink/70">{commitmentCard.description}</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
