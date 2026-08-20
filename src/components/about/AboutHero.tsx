import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { scaleIn } from '@constants/motion'
import { ABOUT_HERO } from '@data/about.data'

export function AboutHero() {
  return (
    <section className="bg-cream pt-20 md:pt-24">
      <Container className="pb-16 pt-20 md:pb-20 md:pt-24">
        <Reveal>
          <Eyebrow>{ABOUT_HERO.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-lg font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {ABOUT_HERO.headingPrefix}
            <span className="text-lime-dark">{ABOUT_HERO.headingAccent}</span>
          </h1>
        </Reveal>
      </Container>

      <Container>
        <Reveal variants={scaleIn} delay={0.12} className="overflow-hidden rounded-t-3xl">
          <img
            src={ABOUT_HERO.image}
            alt="Chiscript technology team collaborating"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </Reveal>
      </Container>
    </section>
  )
}
