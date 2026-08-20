import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { QuoteIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import { REVIEWS, REVIEWS_SECTION } from '@data/testimonials.data'

export function ReviewsGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{REVIEWS_SECTION.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {REVIEWS_SECTION.headingPrefix}
            <span className="text-lime-dark">{REVIEWS_SECTION.headingAccent}</span>
            {REVIEWS_SECTION.headingSuffix}
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid w-full grid-cols-1 gap-6 text-left md:grid-cols-2"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeUp}
              className="flex min-h-[280px] flex-col justify-between rounded-3xl bg-cream p-8 md:p-10"
            >
              <QuoteIcon className="h-7 w-8 text-ink" />

              <p className="mt-6 text-lg leading-relaxed text-ink/80">&ldquo;{review.quote}&rdquo;</p>

              <div className="mt-8 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-ink">{review.author}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
