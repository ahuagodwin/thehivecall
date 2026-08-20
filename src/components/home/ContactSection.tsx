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
              className="font-display text-lg text-ink/40 grayscale transition-all hover:text-lime hover:grayscale-0 md:text-xl"
            >
              {logo.name}
            </motion.span>
          ))}
        </motion.div>

        <Reveal>
          <ContactFormPanel
  eyebrow="LET'S WORK TOGETHER"
  heading="Start Your Digital Journey"
  subtitle="Tell us about your goals and challenges. Our experts will help you find the right technology solution for your business."
  submitLabel="Talk to Our Experts"
  submitVariant="dark"
  image="https://images.pexels.com/photos/7709108/pexels-photo-7709108.jpeg?q=80&w=1400&auto=format&fit=crop"
/>
        </Reveal>
      </Container>
    </section>
  )
}
