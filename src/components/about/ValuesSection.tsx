import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { ServiceIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, staggerFast, fadeUp } from '@constants/motion'
import { ABOUT_TOP_STATS, VALUES, VALUES_SECTION } from '@data/about.data'

export function ValuesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerFast}
          className="grid grid-cols-2 gap-6 border-b border-ink/10 pb-14 md:grid-cols-4"
        >
          {ABOUT_TOP_STATS.map((stat) => (
            <motion.div key={stat.id} variants={fadeUp}>
              <p className="inline-flex items-baseline rounded-xl bg-cream px-4 py-2.5 font-display text-3xl font-medium text-ink md:text-4xl">
                {stat.value}
                {stat.suffix && <span className="text-lime-dark">{stat.suffix}</span>}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>{VALUES_SECTION.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-lg font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                {VALUES_SECTION.headingPrefix}
                <span className="text-lime-dark">{VALUES_SECTION.headingAccent}</span>
                {VALUES_SECTION.headingSuffix}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-ink/60">{VALUES_SECTION.paragraph}</p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((value) => (
            <motion.div
              key={value.id}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-2xl border border-ink/10 p-6"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink">
                <ServiceIcon name={value.icon} className="h-6 w-6" />
              </span>
              <div className="rounded-xl bg-cream p-5">
                <h3 className="font-display text-xl font-medium text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
