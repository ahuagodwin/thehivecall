import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { INSIGHTS_HERO } from '@data/insights.data'

export function InsightsHero() {
  return (
    <section className="bg-cream pt-20 md:pt-24">
      <Container className="py-20 md:py-24">
        <Reveal>
          <Eyebrow>{INSIGHTS_HERO.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-md font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {INSIGHTS_HERO.headingPrefix}
            <span className="text-lime-dark">{INSIGHTS_HERO.headingAccent}</span>
            {INSIGHTS_HERO.headingSuffix}
          </h1>
        </Reveal>
      </Container>
    </section>
  )
}
