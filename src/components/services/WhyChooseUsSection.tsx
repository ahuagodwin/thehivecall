import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { staggerContainer, staggerFast, fadeUp } from '@constants/motion'
import { WHY_CHOOSE_US } from '@/data/services-page.data'

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhyChooseUsSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{WHY_CHOOSE_US.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {WHY_CHOOSE_US.headingPrefix}
            <span className="text-lime-dark">{WHY_CHOOSE_US.headingAccent}</span>
            {WHY_CHOOSE_US.headingSuffix}
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid w-full grid-cols-1 gap-6 text-left md:grid-cols-3"
        >
          {WHY_CHOOSE_US.tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={fadeUp}
              className="rounded-3xl border border-ink/10 bg-white p-8"
            >
              <h3 className="border-b border-ink/10 pb-6 text-center font-display text-xl font-medium text-ink">
                {tier.title}
              </h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={staggerFast}
                className="mt-6 space-y-4"
              >
                {tier.items.map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-lime">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-ink/80">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
