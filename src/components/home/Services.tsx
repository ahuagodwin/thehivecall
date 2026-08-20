import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { ServiceIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import { SERVICES } from '@data/home.data'
import { scrollToId } from '@lib/utils'
import { useNavigate } from 'react-router-dom'
import { paths } from '@/constants/paths'

export function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>SERVICES</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            We Engineer Bold Solutions for a Secure Digital Future
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid w-full grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <motion.a
              href={service.href}
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-cream"
            >
              <div className="relative h-64 overflow-hidden md:h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
              </div>
              <div className="flex items-center justify-between px-5 py-5">
                <span className="font-display text-lg font-medium text-ink">{service.title}</span>
                <CircleArrow tone="onLight" size="sm" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <button
          onClick={() => navigate(paths.services)}
          className="mt-14 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark"
        >
          View All Services
        </button>
      </Container>
    </section>
  )
}
