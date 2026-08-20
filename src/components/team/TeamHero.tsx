import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { scaleIn } from '@constants/motion'
import { TEAM_HERO } from '@data/team.data'

export function TeamHero() {
  return (
    <section className="bg-cream pt-20 md:pt-24">
      <Container className="pb-16 pt-20 md:pb-20 md:pt-24">
        <Reveal>
          <Eyebrow>{TEAM_HERO.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-125 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {TEAM_HERO.headingPrefix}
            <span className="text-lime-dark">{TEAM_HERO.headingAccent}</span>
            {TEAM_HERO.headingSuffix}
          </h1>
        </Reveal>
      </Container>

      <Container>
        <Reveal variants={scaleIn} delay={0.12} className="overflow-hidden rounded-t-3xl">
          <img
            src={TEAM_HERO.image}
            alt="The Chiscript team collaborating around a table"
            className="h-105 w-full object-cover md:h-140"
          />
        </Reveal>
      </Container>
    </section>
  )
}
