import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import type { CapabilityCategory } from '@app-types/index'

interface CapabilitiesMatrixProps {
  heading: string
  capabilities: CapabilityCategory[]
}

export function CapabilitiesMatrix({ heading, capabilities }: CapabilitiesMatrixProps) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-ink/10 md:grid-cols-3"
        >
          {capabilities.map((category, index) => (
            <motion.div key={category.id} variants={fadeUp} className="bg-cream p-8 md:p-9">
              <span className="font-display text-sm font-semibold text-lime-dark">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">{category.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
