import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { ArrowIcon, GoogleGIcon, QuoteIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { REVIEWS, TESTIMONIALS_HERO } from '@data/testimonials.data'
import type { ServiceClientsSayData } from '@app-types/index'

export function ClientsSayCta(props: ServiceClientsSayData) {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  const goPrev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const goNext = () => setIndex((i) => (i + 1) % REVIEWS.length)

  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>{props.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-sm font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
              {props.headingPrefix}
              <span className="text-lime-dark">{props.headingAccent}</span>
              {props.headingSuffix}
            </h2>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 flex flex-wrap items-center gap-5">
            <button
              onClick={() => navigate('/testimonials')}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
            >
              {props.buttonLabel}
            </button>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream">
                <GoogleGIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-medium leading-none text-ink">
                  {TESTIMONIALS_HERO.googleScore}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                  {TESTIMONIALS_HERO.googleLabel}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="relative min-h-[320px] rounded-[28px] bg-cream p-8 md:p-10"
        >
          <QuoteIcon className="h-8 w-9 text-ink" />

          <AnimatePresence mode="wait">
            <motion.p
              key={review.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-6 text-lg leading-relaxed text-ink/85"
            >
              &ldquo;{review.quote}&rdquo;
            </motion.p>
          </AnimatePresence>

          <div className="mt-8 flex items-end justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={review.id + '-author'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-semibold text-ink">{review.author}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {review.role}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2.5">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <ArrowIcon className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lime shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <ArrowIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
