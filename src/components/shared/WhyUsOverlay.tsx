import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { AsteriskIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'

interface WhyUsOverlayProps {
  eyebrow: string
  headingPrefix: string
  headingHighlight: string
  subtitle: string
  buttonLabel: string
  image: string
  imageAlt: string
}

export function WhyUsOverlay({
  eyebrow,
  headingPrefix,
  headingHighlight,
  subtitle,
  buttonLabel,
  image,
  imageAlt,
}: WhyUsOverlayProps) {
  const navigate = useNavigate()

  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container>
        <Reveal variants={fadeUp} className="relative overflow-hidden rounded-[32px]">
          <img src={image} alt={imageAlt} className="h-[480px] w-full object-cover md:h-[620px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          <div className="absolute inset-x-6 bottom-6 max-w-xl rounded-2xl bg-gradient-to-br from-white to-cream p-7 shadow-xl md:inset-x-10 md:bottom-10 md:p-9">
            <div className="flex items-start justify-between">
              <Eyebrow>{eyebrow}</Eyebrow>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-ink">
                <AsteriskIcon className="h-4 w-4" />
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
              {headingPrefix}
              <span className="bg-lime px-1.5">{headingHighlight}</span>
            </h2>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-ink/70">{subtitle}</p>
              <button
                onClick={() => navigate('/contact-us')}
                className="shrink-0 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
