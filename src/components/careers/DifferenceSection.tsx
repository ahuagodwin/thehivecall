import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { ServiceIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import { cn } from '@lib/utils'
import { DIFFERENCE_CARDS, DIFFERENCE_SECTION } from '@data/career.data'

export function DifferenceSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{DIFFERENCE_SECTION.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-lg font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {DIFFERENCE_SECTION.headingPrefix}
            <span className="text-lime-dark">{DIFFERENCE_SECTION.headingAccent}</span>
            {DIFFERENCE_SECTION.headingSuffix}
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4"
        >
          {DIFFERENCE_CARDS.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp}
              className={cn(
                'flex flex-col justify-between gap-10 rounded-2xl border p-6',
                card.highlighted ? 'border-lime bg-lime' : 'border-ink/10 bg-white'
              )}
            >
              <span
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-full',
                  card.highlighted ? 'bg-ink text-lime' : 'bg-lime text-ink'
                )}
              >
                <ServiceIcon name={card.icon} className="h-6 w-6" />
              </span>
              <div className="rounded-xl bg-cream p-5">
                <h3 className="font-display text-xl font-medium text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
