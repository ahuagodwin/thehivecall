import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { MISSION_SECTION } from '@/data/philosophy-page.data'

export function MissionSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{MISSION_SECTION.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {MISSION_SECTION.headingPrefix}
            <span className="text-lime-dark">{MISSION_SECTION.headingAccent}</span>
            {MISSION_SECTION.headingSuffix}
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-2xl text-ink/60">{MISSION_SECTION.paragraph}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-8">
          <button
            onClick={() => navigate('/contact-us')}
            className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
          >
            {MISSION_SECTION.buttonLabel}
          </button>
        </Reveal>
      </Container>
    </section>
  )
}
