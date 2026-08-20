import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { CircleArrow } from '@common/CircleArrow'
import { Eyebrow } from '@common/Eyebrow'
import { PhoneIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerContainer, fadeUp } from '@constants/motion'
import { OFFICE_LOCATIONS } from '@data/contact.data'
import { cn } from '@lib/utils'

export function OfficeLocations() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            Office Locations
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {OFFICE_LOCATIONS.map((office) => (
            <motion.div
              key={office.id}
              variants={fadeUp}
              className={cn(
                'relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl p-8',
                office.isHeadquarters ? 'bg-ink text-white' : 'border border-ink/12 bg-white text-ink'
              )}
            >
              {office.isHeadquarters && (
                <svg
                  viewBox="0 0 240 220"
                  className="pointer-events-none absolute -bottom-6 -right-6 h-56 w-56 text-lime opacity-90"
                  fill="currentColor"
                >
                  <path d="M204 8L236 40L120 220L4 40L36 8L120 132L204 8Z" />
                </svg>
              )}

              <div className="relative z-10">
                <Eyebrow tone={office.isHeadquarters ? 'dark' : 'light'}>{office.tag}</Eyebrow>
                <h3 className="mt-6 font-display text-2xl font-medium">{office.name}</h3>
                <div className={cn('mt-4 space-y-1', office.isHeadquarters ? 'text-white/80' : 'text-ink/60')}>
                  {office.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {office.phone && (
                  <a
                    href={`tel:${office.phone}`}
                    className={cn(
                      'mt-4 inline-flex items-center gap-2 text-sm font-medium',
                      office.isHeadquarters ? 'text-white/90' : 'text-ink/80'
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full',
                        office.isHeadquarters ? 'bg-white/10' : 'bg-ink text-lime'
                      )}
                    >
                      <PhoneIcon className="h-3.5 w-3.5" />
                    </span>
                    {office.phone}
                  </a>
                )}
              </div>

              <a
                href={office.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'relative z-10 mt-8 inline-flex items-center gap-2.5 text-sm font-semibold',
                  office.isHeadquarters ? 'text-white' : 'text-ink'
                )}
              >
                Get direction
                <CircleArrow tone="onDark" size="sm" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
