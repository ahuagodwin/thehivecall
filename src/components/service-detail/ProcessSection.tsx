import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import type { ServiceProcessData } from '@app-types/index'

export function ProcessSection(props: ServiceProcessData) {
  const navigate = useNavigate()

  return (
    <section className="bg-cream py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{props.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {props.headingPrefix}
            <span className="text-lime-dark">{props.headingAccent}</span>
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4"
        >
          {props.steps.map((step) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              className="rounded-3xl border border-ink/10 bg-white p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-sm font-semibold text-ink">
                {step.number}
              </span>
              <div className="mt-8 rounded-xl bg-cream p-5">
                <h3 className="font-display text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-14">
          <button
            onClick={() => navigate('/contact-us')}
            className="inline-flex items-center gap-2.5"
          >
            <span className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light">
              {props.ctaLabel}
            </span>
            <CircleArrow tone="onDark" />
          </button>
        </Reveal>
      </Container>
    </section>
  )
}
