import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { Reveal } from '@common/Reveal'
import { scaleIn } from '@constants/motion'
import type { ServiceHeroData } from '@app-types/index'

export function ServiceDetailHero(props: ServiceHeroData) {
  const navigate = useNavigate()

  return (
    <section className="bg-cream pt-20 md:pt-24">
      <Container className="flex flex-col justify-between gap-6 pb-16 pt-20 md:flex-row md:items-end md:pb-20 md:pt-24">
        <div>
          <Reveal>
            <Eyebrow>{props.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
              {props.title}
            </h1>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <button
            onClick={() => navigate('/contact-us')}
            className="inline-flex items-center gap-2.5"
          >
            <span className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light">
              {props.ctaLabel}
            </span>
            <CircleArrow tone="onDark" />
          </button>
        </Reveal>
      </Container>

      <Container>
        <Reveal variants={scaleIn} delay={0.18} className="overflow-hidden rounded-t-3xl">
          <img
            src={props.image}
            alt={`TheHiveCall ${props.title} engagement`}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </Reveal>
      </Container>
    </section>
  )
}
