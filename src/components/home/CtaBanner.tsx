import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { CircleArrow } from '@common/CircleArrow'
import { TrendUpIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { scaleIn } from '@constants/motion'
import { CTA_IMAGE, CTA_HEADING, CTA_BUTTON_LABEL } from '@data/home.data'

export function CtaBanner() {
  const navigate = useNavigate()

  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container>
        <Reveal variants={scaleIn} className="relative overflow-hidden rounded-[32px]">
          <img
            src={CTA_IMAGE}
            alt="Technology team collaborating in a modern office"
            className="h-[420px] w-full object-cover md:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

          <span className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-cream text-ink md:left-10 md:top-10">
            <TrendUpIcon className="h-6 w-6" />
          </span>

          <div className="absolute inset-x-8 bottom-8 flex flex-col justify-between gap-6 md:inset-x-10 md:bottom-10 md:flex-row md:items-end">
            <h2 className="max-w-xl font-display text-3xl font-medium leading-tight text-white md:text-4xl">
              {CTA_HEADING}
            </h2>
            <button
              onClick={() => navigate('/contact-us')}
              className="inline-flex items-center gap-2.5 self-start"
            >
              <span className="rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink">
                {CTA_BUTTON_LABEL}
              </span>
              <CircleArrow tone="onDark" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
