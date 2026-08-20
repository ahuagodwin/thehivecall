import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { TrendUpIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'
import type { ServiceVisionData } from '@app-types/index'

export function VisionSplitCta(props: ServiceVisionData) {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal variants={fadeUp} className="overflow-hidden rounded-[32px]">
          <img
            src={props.image}
            alt="A Chiscript client planning their roadmap"
            className="h-full min-h-[380px] w-full object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-br from-lime to-lime-dark p-8 md:p-10"
        >
          <div className="flex items-start justify-between">
            <Eyebrow className="border-ink/20">{props.eyebrow}</Eyebrow>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lime">
              <TrendUpIcon className="h-5 w-5" />
            </span>
          </div>

          <h2 className="font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            {props.heading}
          </h2>

          <p className="max-w-md text-ink/70">{props.paragraph}</p>
        </Reveal>
      </Container>
    </section>
  )
}
