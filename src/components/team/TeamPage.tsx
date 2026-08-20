import { TeamHero } from './TeamHero'
import { OurPeopleIntro } from './OurPeopleIntro'
import { TeamGrid } from './TeamGrid'
import { TeamClosingQuote } from './TeamClosingQuote'
import { LEADERSHIP } from '@data/team.data'
import { Container } from '@/common/Container'

export function TeamPage() {
  return (
    <>
      <TeamHero />
      <OurPeopleIntro />
      <section className="bg-cream py-20 md:py-20">
      <Container className='space-y-16'>
        {LEADERSHIP.map((section) => (
            <TeamGrid
              key={section.caption}
              label={section.caption}
              members={section.team}
            />
          ))}
      </Container>
    </section>
      <TeamClosingQuote />
    </>
  )
}
