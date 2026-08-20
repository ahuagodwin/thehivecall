import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeUp } from '@constants/motion'
import { OPEN_POSITIONS_CTA } from '@data/career.data'

export function OpenPositionsCta() {
  const navigate = useNavigate()

  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-white md:px-16 md:py-20">
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute -left-10 top-0 h-64 w-64 -rotate-12 text-white/5"
            fill="currentColor"
          >
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rotate-12 text-white/5"
            fill="currentColor"
          >
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
          </svg>

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow tone="dark">{OPEN_POSITIONS_CTA.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-4xl">
                {OPEN_POSITIONS_CTA.headingPrefix}
                <span className="text-lime">{OPEN_POSITIONS_CTA.headingAccent}</span>
              </h2>
              <p className="mt-6 max-w-md text-white/70">{OPEN_POSITIONS_CTA.paragraph}</p>
            </div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerFast}
              className="divide-y divide-white/15 self-center"
            >
              {OPEN_POSITIONS_CTA.positions.map((position) => (
                <motion.li key={position} variants={fadeUp}>
                  <button
                    onClick={() => navigate('/contact-us')}
                    className="w-full py-5 cursor-pointer text-left text-lg font-medium transition-colors hover:text-lime"
                  >
                    {position}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
