import { Container } from '@common/Container'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'
import { cn } from '@lib/utils'
import type { IndustryChallenge } from '@app-types/index'

interface ChallengesZigzagProps {
  heading: string
  challenges: IndustryChallenge[]
}

export function ChallengesZigzag({ heading, challenges }: ChallengesZigzagProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-20">
          {challenges.map((challenge, index) => {
            const reversed = index % 2 === 1
            return (
              <Reveal
                key={challenge.id}
                variants={fadeUp}
                className={cn(
                  'grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14',
                  reversed && 'md:[direction:rtl]'
                )}
              >
                <div className={cn('overflow-hidden rounded-[28px]', reversed && '[direction:ltr]')}>
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="h-[320px] w-full object-cover md:h-[380px]"
                  />
                </div>
                <div className={cn(reversed && '[direction:ltr]')}>
                  <span className="font-display text-sm font-semibold text-lime-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
                    {challenge.title}
                  </h3>
                  <p className="mt-4 text-ink/60">{challenge.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
