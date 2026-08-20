import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { QuoteIcon, AsteriskIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { fadeUp } from '@constants/motion'
import { TEAM_CLOSING } from '@data/team.data'

export function TeamClosingQuote() {
  const navigate = useNavigate()

  return (
    <section id="careers" className="bg-white py-16 md:py-20">
      <Container>
        <Reveal variants={fadeUp} className="relative overflow-hidden rounded-[32px]">
          <img
            src={TEAM_CLOSING.image}
            alt="A Chiscript team member smiling in the office"
            className="h-[480px] w-full object-cover md:h-[600px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          <div className="absolute inset-x-6 bottom-6 max-w-lg rounded-2xl bg-gradient-to-br from-white to-cream p-7 shadow-xl md:inset-x-10 md:bottom-10 md:p-9">
            <div className="flex items-start justify-between">
              <QuoteIcon className="h-8 w-9 text-ink" />
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-ink">
                <AsteriskIcon className="h-4 w-4" />
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-ink/85">
              &ldquo;{TEAM_CLOSING.quote}&rdquo;
            </p>

            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="font-semibold text-ink">{TEAM_CLOSING.author}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {TEAM_CLOSING.role}
                </p>
              </div>
              <button
                onClick={() => navigate('/contact-us')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                {TEAM_CLOSING.careersLabel}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
