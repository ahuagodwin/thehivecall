import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeUp, EASE_OUT } from '@constants/motion'
import { cn } from '@lib/utils'
import type { ServiceApproachData } from '@app-types/index'

function PlusIcon({ className, open }: { className?: string; open: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </motion.svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ApproachSection(props: ServiceApproachData) {
  const navigate = useNavigate()
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <Eyebrow>{props.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-md font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                {props.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-md text-ink/60">{props.paragraph}</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <button
                onClick={() => navigate('/contact-us')}
                className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
              >
                Schedule a Call
              </button>
            </Reveal>
          </div>

          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {props.accordionItems.map((item) => {
              const isOpen = openId === item.id
              return (
                <div key={item.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl font-medium text-ink md:text-2xl">
                      {item.title}
                    </span>
                    <span
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors',
                        isOpen ? 'bg-ink text-lime' : 'bg-cream text-ink'
                      )}
                    >
                      <PlusIcon className="h-4 w-4" open={isOpen} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-16 text-ink/60">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerFast}
          className="mt-14 flex flex-wrap gap-3 border-t border-ink/10 pt-10"
        >
          {props.tags.map((tag) => (
            <motion.span
              key={tag}
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink/80"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-lime">
                <CheckIcon className="h-3 w-3" />
              </span>
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
