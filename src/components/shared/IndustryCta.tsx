import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { AsteriskIcon } from '@common/Icon'
import { CircleArrow } from '@common/CircleArrow'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'

interface IndustryCtaProps {
  heading: string
  subheading: string
  buttonLabel?: string
}

export function IndustryCta({ heading, subheading, buttonLabel = 'Book a Consultation' }: IndustryCtaProps) {
  const navigate = useNavigate()

  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container>
        <Reveal
          variants={fadeUp}
          className="relative flex flex-col gap-8 overflow-hidden rounded-[32px] bg-ink px-8 py-14 md:flex-row md:items-center md:justify-between md:px-16 md:py-16"
        >
          <AsteriskIcon className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-lime/10" />

          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-white/60">{subheading}</p>
          </div>

          <button
            onClick={() => navigate('/contact-us')}
            className="relative inline-flex w-fit shrink-0 items-center gap-2.5"
          >
            <span className="rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark">
              {buttonLabel}
            </span>
            <CircleArrow tone="onDark" />
          </button>
        </Reveal>
      </Container>
    </section>
  )
}
