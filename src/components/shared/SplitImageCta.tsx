import { Link } from 'react-router-dom'
import { CircleArrow } from '@common/CircleArrow'
import { AsteriskIcon } from '@common/Icon'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'

interface SplitImageCtaProps {
  eyebrow: string
  heading: string
  subtitle?: string
  buttonLabel: string
  buttonHref: string
  image: string
  imageAlt: string
}

export function SplitImageCta({
  eyebrow,
  heading,
  subtitle,
  buttonLabel,
  buttonHref,
  image,
  imageAlt,
}: SplitImageCtaProps) {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <Reveal variants={fadeUp} className="overflow-hidden rounded-[32px]">
          <img src={image} alt={imageAlt} className="h-full min-h-[360px] w-full object-cover" />
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-br from-lime to-lime-dark p-8 md:p-10"
        >
          <div className="flex items-start justify-between">
            <Eyebrow className="border-ink/20">{eyebrow}</Eyebrow>
            <AsteriskIcon className="h-7 w-7 text-ink" />
          </div>

          <div>
            <h2 className="font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
              {heading}
            </h2>
            {subtitle && <p className="mt-5 max-w-md text-ink/70">{subtitle}</p>}
          </div>

          <Link to={buttonHref} className="inline-flex w-fit items-center gap-2.5">
            <span className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white">
              {buttonLabel}
            </span>
            <CircleArrow tone="onLime" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
