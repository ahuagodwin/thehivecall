import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { Reveal } from '@common/Reveal'
import { ContactFormPanel } from '@components/shared/ContactFormPanel'
import { staggerFast, fadeIn } from '@constants/motion'
import { CLIENT_LOGOS } from '@data/home.data'

export function ContactSection() {
  return (
    <section id="contact" className="bg-white pb-24 md:pb-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerFast}
          className="mb-16 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6"
        >
          {CLIENT_LOGOS.map((logo) => (
            <motion.span
              key={logo.id}
              variants={fadeIn}
              className="font-display text-lg text-ink/40 grayscale transition-all hover:text-ink hover:grayscale-0 md:text-xl"
            >
              {logo.name}
            </motion.span>
          ))}
        </motion.div>

        <Reveal>
          <ContactFormPanel
            eyebrow="SCHEDULE CONSULTATION"
            heading="Let's Connect"
            subtitle="Connect with our experts for a free consultation and tailored solutions."
            submitLabel="Schedule a Free Consultation"
            submitVariant="dark"
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1400&auto=format&fit=crop"
          />
        </Reveal>
      </Container>
    </section>
  )
}
