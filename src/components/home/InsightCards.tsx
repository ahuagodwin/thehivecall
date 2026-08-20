import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { staggerContainer, fadeUp } from '@constants/motion'
import { INSIGHT_CARDS } from '@data/home.data'
import { motion } from 'framer-motion'
import { cn, scrollToId } from '@lib/utils'

const VARIANT_CARD: Record<string, string> = {
  light: 'bg-cream',
  accent: 'bg-lime',
  accentAlt: 'bg-lime',
}

export function InsightCards() {
  const navigate = useNavigate()

  const goTo = (href: string) => {
    if (href.startsWith('#')) {
      scrollToId(href)
    } else {
      navigate(href)
    }
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {INSIGHT_CARDS.map((card) => (
            <motion.div
              role="link"
              tabIndex={0}
              onClick={() => goTo(card.href)}
              onKeyDown={(e) => e.key === 'Enter' && goTo(card.href)}
              key={card.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'flex cursor-pointer flex-col justify-between rounded-3xl p-6 pb-0',
                VARIANT_CARD[card.variant]
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <Eyebrow tone="light" className={card.variant !== 'light' ? 'border-ink/25' : ''}>
                  {card.tag}
                </Eyebrow>
                <CircleArrow tone={card.variant === 'light' ? 'onLight' : 'onLime'} size="sm" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-ink">
                {card.title}
              </h3>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
