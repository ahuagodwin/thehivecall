import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { CircleArrow } from '@common/CircleArrow'
import { AsteriskIcon } from '@common/Icon'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'
import { AWARDS_CTA } from '@/data/career.data'

export function AwardsCta() {
  const navigate = useNavigate()

  return (
    <section className="bg-white pb-20 md:pb-28">
      <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal variants={fadeUp} className="relative overflow-hidden rounded-4xl">
          <img
            src={AWARDS_CTA.image}
            alt="Chiscript team members reviewing a project together"
            className="h-full min-h-95 w-full object-cover"
          />
          <div className="absolute bottom-6 right-6 flex flex-col items-center justify-center rounded-xl bg-white px-4 py-3.5 text-center shadow-lg">
            <p className="text-xs font-semibold leading-tight text-ink/70">
              {AWARDS_CTA.badgeTitle}
            </p>
            <p className="mt-1.5 font-display text-lg font-medium text-ink">
              {AWARDS_CTA.badgeYear}
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative flex min-h-95 flex-col justify-between overflow-hidden rounded-4xl bg-linear-to-br from-lime to-lime-dark p-8 md:p-10"
        >
          <div className="flex items-start justify-between">
            <Eyebrow className="border-ink/20">{AWARDS_CTA.eyebrow}</Eyebrow>
            <AsteriskIcon className="h-7 w-7 text-ink" />
          </div>

          <h2 className="font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            {AWARDS_CTA.heading}
          </h2>

          <p className="max-w-md text-ink/70">{AWARDS_CTA.paragraph}</p>

          <button
            onClick={() => navigate('/contact-us')}
            className="inline-flex w-fit items-center gap-2.5"
          >
            <span className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white">
              {AWARDS_CTA.buttonLabel}
            </span>
            <CircleArrow tone="onLime" />
          </button>
        </Reveal>
      </Container>
    </section>
  )
}
