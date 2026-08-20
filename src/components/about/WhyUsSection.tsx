import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { UsersIcon } from '@common/Icon'
import { CircleArrow } from '@common/CircleArrow'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeUp } from '@constants/motion'
import { WHY_US } from '@data/about.data'

export function WhyUsSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-white pb-20 md:pb-28 pt-50">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>{WHY_US.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-md font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                {WHY_US.headingPrefix}
                <span className="text-lime-dark">{WHY_US.headingAccent}</span>
                {WHY_US.headingSuffix}
              </h2>
            </Reveal>

            <Reveal delay={0.16} className="mt-8">
              <button
                onClick={() => navigate('/contact-us')}
                className="inline-flex items-center gap-2.5"
              >
                <span className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light">
                  {WHY_US.buttonLabel}
                </span>
                <CircleArrow tone="onLime" />
              </button>
            </Reveal>
          </div>

          <div>
            <Reveal variants={fadeUp}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink">
                <UsersIcon className="h-6 w-6" />
              </span>
            </Reveal>
            <Reveal delay={0.1} className="mt-5">
              <p className="text-ink/60">{WHY_US.paragraph}</p>
            </Reveal>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerFast}
          className="mt-14 flex flex-wrap gap-4 border-t border-ink/10 pt-10"
        >
          {WHY_US.pillLinks.map((label) => (
            <motion.a
              key={label}
              href="/#services"
              variants={fadeUp}
              className="inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cream-dark"
            >
              {label}
              <CircleArrow tone="onDark" size="sm" />
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
