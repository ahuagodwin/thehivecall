import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { AsteriskIcon, BarChartIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'
import { RESULTS_CTA } from '@/data/services-page.data'
import { TESTIMONIALS } from '@data/home.data'

const successStory = TESTIMONIALS[0]

export function ResultsCta() {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal
          variants={fadeUp}
          className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[32px] bg-ink p-8 text-white md:p-10"
        >
          <div className="flex items-start justify-between">
            <h2 className="max-w-sm font-display text-3xl font-medium leading-tight md:text-4xl">
              {RESULTS_CTA.heading}
            </h2>
            <AsteriskIcon className="h-6 w-6 shrink-0 text-lime" />
          </div>
          <CircleArrow tone="onLight" />
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-br from-lime to-lime-dark p-8 md:p-10"
        >
          <div className="flex items-start justify-between">
            <Eyebrow className="border-ink/20">{successStory.storyTag}</Eyebrow>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lime">
              <BarChartIcon className="h-5 w-5" />
            </span>
          </div>

          <h3 className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            {successStory.storyTitle}
          </h3>

          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-4xl font-medium text-ink">
                {successStory.metricValue}
              </p>
              <p className="mt-2 max-w-xs text-sm text-ink/70">{successStory.metricLabel}</p>
            </div>
            <button className="shrink-0 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light">
              Read Full Story
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
