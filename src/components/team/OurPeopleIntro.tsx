import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { OUR_PEOPLE } from '@data/team.data'

export function OurPeopleIntro() {
  return (
    <section className="bg-white pb-16 pt-20 md:pb-20 md:pt-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <Reveal>
            <Eyebrow>{OUR_PEOPLE.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-100 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
              <span className="text-lime-dark">{OUR_PEOPLE.headingAccent}</span>
              {OUR_PEOPLE.headingSuffix}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="text-ink/60">{OUR_PEOPLE.paragraph}</p>
        </Reveal>
      </Container>
    </section>
  )
}
