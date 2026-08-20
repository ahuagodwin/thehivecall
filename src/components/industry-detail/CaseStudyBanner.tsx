import { Container } from '@common/Container'
import { QuoteIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'
import type { IndustryCaseStudy } from '@app-types/index'

export function CaseStudyBanner({ quote, author, role, metricValue, metricLabel, image }: IndustryCaseStudy) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal variants={fadeUp} className="relative overflow-hidden rounded-[32px]">
          <img src={image} alt={author} className="h-[520px] w-full object-cover md:h-[600px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-8 p-8 md:flex-row md:items-end md:justify-between md:p-14">
            <div className="max-w-2xl">
              <QuoteIcon className="h-8 w-9 text-lime" />
              <p className="mt-5 font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="mt-6 font-semibold text-white">{author}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">{role}</p>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/20 bg-white/10 px-7 py-6 backdrop-blur-md">
              <p className="font-display text-4xl font-medium text-lime">{metricValue}</p>
              <p className="mt-2 max-w-[180px] text-xs text-white/70">{metricLabel}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
