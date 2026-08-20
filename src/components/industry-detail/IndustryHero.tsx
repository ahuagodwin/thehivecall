import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { staggerFast, fadeUp, EASE_OUT } from '@constants/motion'
import type { IndustryStat } from '@app-types/index'

interface IndustryHeroProps {
  eyebrow: string
  title: string
  tagline: string
  heroImage: string
  stats: IndustryStat[]
}

export function IndustryHero({ eyebrow, title, tagline, heroImage, stats }: IndustryHeroProps) {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-ink pt-20 md:pt-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt={title} className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>

      <Container className="relative flex min-h-[560px] flex-col justify-end pb-16 pt-40 md:min-h-[620px] md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
          className="mt-6 max-w-2xl font-display text-5xl font-medium leading-tight text-white md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT }}
          className="mt-5 max-w-xl text-lg text-white/70"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-8"
        >
          <button onClick={() => navigate('/contact-us')} className="inline-flex items-center gap-2.5">
            <span className="rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark">
              Book a Consultation
            </span>
            <CircleArrow tone="onDark" />
          </button>
        </motion.div>
      </Container>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerFast}
        className="relative"
      >
        <Container className="grid grid-cols-1 gap-4 pb-14 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-md"
            >
              <p className="font-display text-3xl font-medium text-lime">{stat.value}</p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </Container>
      </motion.div>
    </section>
  )
}
