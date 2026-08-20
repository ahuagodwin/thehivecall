import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { ServiceIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import { PHILOSOPHY_PILLARS, PHILOSOPHY_STATS } from '@data/home.data'

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-white pb-24 pt-4 md:pb-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-white md:px-16 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/10 blur-3xl" />

          <Eyebrow tone="dark">OUR PHILOSOPHY</Eyebrow>
          <h2 className="mt-6 max-w-lg font-display text-3xl font-medium leading-tight md:text-4xl">
            Strategic Technology Interventions that Transform our Clients&apos; Business Trajectory
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                className="rounded-2xl bg-white/5 p-6"
              >
                <ServiceIcon name={pillar.icon} className="h-6 w-6 text-lime" />
                <h3 className="mt-5 font-display text-lg font-medium">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute -bottom-8 left-14 h-10 w-10 rotate-45 bg-ink md:left-16" />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {PHILOSOPHY_STATS.map((stat) => (
            <motion.div key={stat.id} variants={fadeUp}>
              <p className="font-display text-3xl font-medium text-ink md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
