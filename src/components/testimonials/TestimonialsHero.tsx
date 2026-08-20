import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { GoogleGIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeIn, scaleIn } from '@constants/motion'
import { TESTIMONIALS_HERO, TESTIMONIALS_CLIENT_LOGOS } from '@data/testimonials.data'

export function TestimonialsHero() {
  return (
    <section className="bg-cream pt-20 md:pt-24">
      <Container className="py-20 md:py-28">
        <Reveal>
          <Eyebrow>{TESTIMONIALS_HERO.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {TESTIMONIALS_HERO.headingPrefix}
            <span className="text-lime-dark">{TESTIMONIALS_HERO.headingAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-lg text-ink/60">{TESTIMONIALS_HERO.subtitle}</p>
        </Reveal>

        <Reveal variants={scaleIn} delay={0.2} className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 rounded-2xl bg-white px-7 py-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream">
              <GoogleGIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-2xl font-medium leading-none text-ink">
                {TESTIMONIALS_HERO.googleScore}
              </p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink/50">
                {TESTIMONIALS_HERO.googleLabel}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-ink/10 pt-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerFast}
            className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6"
          >
            {TESTIMONIALS_CLIENT_LOGOS.map((logo) => (
              <motion.span
                key={logo.id}
                variants={fadeIn}
                className="font-display text-lg text-ink/50 transition-colors hover:text-ink md:text-xl"
              >
                {logo.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
