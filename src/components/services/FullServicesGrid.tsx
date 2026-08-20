import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { ServiceIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import { FULL_SERVICES_SECTION, SERVICES_GRID_ITEMS } from '@/data/services-page.data'


export function FullServicesGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{FULL_SERVICES_SECTION.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {FULL_SERVICES_SECTION.headingPrefix}
            <span className="text-lime-dark">{FULL_SERVICES_SECTION.headingAccent}</span>
            {FULL_SERVICES_SECTION.headingSuffix}
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid w-full grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES_GRID_ITEMS.map((service) => (
            <motion.a
              href={service.href}
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-cream"
            >
              <div className="relative h-48 overflow-hidden md:h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-lime text-ink">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 px-5 py-5">
                <span className="font-display text-base font-medium leading-snug text-ink">
                  {service.title}
                </span>
                <CircleArrow tone="onLight" size="sm" className="border border-ink/10" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
