import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { QuoteIcon, BarChartIcon } from '@common/Icon'
import { TESTIMONIALS } from '@data/home.data'
import { useUIStore } from '@store/uiStore'
import { cn } from '@lib/utils'

export function Testimonials() {
  const { activeTestimonial, setActiveTestimonial, nextTestimonial } = useUIStore()
  const testimonial = TESTIMONIALS[activeTestimonial]

  useEffect(() => {
    const id = setInterval(nextTestimonial, 7000)
    return () => clearInterval(id)
  }, [nextTestimonial])

  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${testimonial.id}-photo`}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[420px] overflow-hidden rounded-3xl"
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <QuoteIcon className="absolute left-8 top-8 h-8 w-9 text-lime" />

              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-cream/95 p-7 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-ink/90">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold text-ink">
                    {testimonial.companyTag}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{testimonial.author}</p>
                    <p className="text-xs uppercase tracking-wide text-ink/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${testimonial.id}-story`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-lime to-lime-dark p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <Eyebrow className="border-ink/20">{testimonial.storyTag}</Eyebrow>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lime">
                  <BarChartIcon className="h-5 w-5" />
                </span>
              </div>

              <h3 className="font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
                {testimonial.storyTitle}
              </h3>

              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-display text-5xl font-medium text-ink">{testimonial.metricValue}</p>
                  <p className="mt-2 max-w-xs text-sm text-ink/70">{testimonial.metricLabel}</p>
                </div>
                <button className="shrink-0 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light">
                  Read Full Story
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.id}
              aria-label={`Show testimonial from ${item.author}`}
              onClick={() => setActiveTestimonial(index)}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                index === activeTestimonial ? 'w-8 bg-ink' : 'w-2.5 bg-ink/20'
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
