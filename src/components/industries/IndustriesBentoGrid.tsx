import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { CircleArrow } from '@common/CircleArrow'
import { staggerContainer, fadeUp } from '@constants/motion'
import { cn } from '@lib/utils'
import { INDUSTRY_CARDS } from '@data/industries-page.data'

export function IndustriesBentoGrid() {
  const navigate = useNavigate()

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-5 [grid-auto-flow:dense] md:grid-cols-4"
        >
          {INDUSTRY_CARDS.map((card) => (
            <motion.button
              key={card.id}
              // onClick={() => navigate(`/industries/${card.slug}`)}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={cn(
                'group relative overflow-hidden rounded-3xl text-left',
                card.size === 'large'
                  ? 'col-span-2 row-span-2 min-h-[340px] md:min-h-[460px]'
                  : 'col-span-2 min-h-[220px] sm:col-span-1 md:min-h-[220px]'
              )}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity group-hover:from-ink/95" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3
                  className={cn(
                    'font-display font-medium text-white',
                    card.size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                  )}
                >
                  {card.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-16 group-hover:opacity-100">
                  {card.tagline}
                </p>
              </div>

              <span className="absolute right-5 top-5">
                <CircleArrow tone="onDark" size="sm" />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
