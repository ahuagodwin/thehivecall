import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { PinIcon, PhoneIcon, MailIcon } from '@common/Icon'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeUp } from '@constants/motion'
import { CONTACT_HERO, CONTACT_INFO_ITEMS } from '@data/contact.data'

const ICONS = {
  pin: PinIcon,
  phone: PhoneIcon,
  mail: MailIcon,
}

export function ContactHero() {
  return (
    <section className="bg-cream pt-20 md:pt-24">
      <Container className="flex flex-col items-center py-20 text-center md:py-28">
        <Reveal>
          <Eyebrow>{CONTACT_HERO.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {CONTACT_HERO.headingPrefix}
            <span className="text-lime-dark">{CONTACT_HERO.headingAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-lg text-ink/60">{CONTACT_HERO.subtitle}</p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerFast}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {CONTACT_INFO_ITEMS.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="flex flex-col items-center gap-4 sm:items-start sm:text-left"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-lime">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-medium text-ink">{item.label}</p>
                  {item.valueLines.map((line) => (
                    <p key={line} className="text-ink/60">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
