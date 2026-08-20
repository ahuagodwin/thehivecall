import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { scaleIn } from '@constants/motion'
import { PHILOSOPHY_HERO } from '@/data/philosophy-page.data'

export function PhilosophyHero() {
  return (
    <section className="bg-cream pt-20 md:pt-24">
      <Container className="pb-16 pt-20 md:pb-20 md:pt-24">
        <Reveal>
          <Eyebrow>{PHILOSOPHY_HERO.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-md font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {PHILOSOPHY_HERO.headingPrefix}
            <span className="text-lime-dark">{PHILOSOPHY_HERO.headingAccent}</span>
            {PHILOSOPHY_HERO.headingSuffix}
          </h1>
        </Reveal>
      </Container>

      <Container>
        <Reveal variants={scaleIn} delay={0.12} className="overflow-hidden rounded-t-3xl">
          <img
            src={PHILOSOPHY_HERO.image}
            alt="A TheHiveCall advisor walking a client through their technology roadmap"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </Reveal>
      </Container>
    </section>
  )
}
