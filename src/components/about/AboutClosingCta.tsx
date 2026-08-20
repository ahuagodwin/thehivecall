import { Link, useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { CircleArrow } from '@common/CircleArrow'
import { QuoteIcon, AsteriskIcon } from '@common/Icon'
import { staggerContainer, fadeUp } from '@constants/motion'
import { motion } from 'framer-motion'
import { ABOUT_QUOTE, ABOUT_CTA_IMAGE, ABOUT_REPORT_CARD } from '@data/about.data'

export function AboutClosingCta() {
  const navigate = useNavigate()

  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="flex min-h-[420px] flex-col justify-between rounded-3xl bg-gradient-to-br from-lime to-lime-dark p-8"
          >
            <QuoteIcon className="h-8 w-9 text-ink" />
            <p className="mt-6 font-display text-xl font-medium leading-relaxed text-ink">
              &ldquo;{ABOUT_QUOTE.quote}&rdquo;
            </p>

            <div className="mt-8 flex items-center gap-3">
              <img
                src={ABOUT_QUOTE.avatar}
                alt={ABOUT_QUOTE.author}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-ink">{ABOUT_QUOTE.author}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">
                  {ABOUT_QUOTE.role}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate('/contact-us')}
              className="mt-8 inline-flex w-fit items-center gap-2.5"
            >
              <span className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white">
                Free Consultation
              </span>
              <CircleArrow tone="onLime" />
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-3xl">
            <img
              src={ABOUT_CTA_IMAGE}
              alt="Chiscript team member reviewing a project"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-ink p-8"
          >
            <svg
              viewBox="0 0 240 220"
              className="pointer-events-none absolute -bottom-6 -right-6 h-56 w-56 text-lime opacity-90"
              fill="currentColor"
            >
              <path d="M204 8L236 40L120 220L4 40L36 8L120 132L204 8Z" />
            </svg>

            <h3 className="relative z-10 font-display text-2xl font-medium leading-snug text-lime md:text-3xl">
              {ABOUT_REPORT_CARD.title}
            </h3>

            <div className="relative z-10 flex items-center gap-2 text-white/80">
              <AsteriskIcon className="h-4 w-4 text-lime" />
              <span className="text-sm font-semibold">{ABOUT_REPORT_CARD.year}</span>
            </div>

            <Link
              to={ABOUT_REPORT_CARD.href}
              className="absolute inset-0 z-10"
              aria-label={ABOUT_REPORT_CARD.title}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
