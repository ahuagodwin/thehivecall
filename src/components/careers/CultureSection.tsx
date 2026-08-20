import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeUp } from '@constants/motion'
import { CULTURE_SECTION } from '@data/career.data'

export function CultureSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <Reveal>
            <Eyebrow>{CULTURE_SECTION.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-sm font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
              {CULTURE_SECTION.headingPrefix}
              <span className="text-lime-dark">{CULTURE_SECTION.headingAccent}</span>
              {CULTURE_SECTION.headingSuffix}
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
          {CULTURE_SECTION.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} variants={fadeUp} className="text-ink/60">
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
