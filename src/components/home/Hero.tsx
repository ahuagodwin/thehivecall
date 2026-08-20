import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Button } from '@common/Button'
import { HERO_VARIANTS } from '@data/home.data'
import { EASE_OUT } from '@constants/motion'
import { cn } from '@lib/utils'
import { useUIStore } from '@store/uiStore'
import { useDeviceCategory, useViewportWidth } from '@/hooks/useDeviceScreen'

const AUTO_ROTATE_MS = 6000
const LARGE_VIEWPORT_WIDTH = 1536

export function Hero() {
  const { activeHeroTab, setActiveHeroTab } = useUIStore()
  const variant = HERO_VARIANTS[activeHeroTab]
  const navigate = useNavigate()

  const deviceCategory = useDeviceCategory()
  const viewportWidth = useViewportWidth()

  const isLargeUnknownDevice = deviceCategory === 'unknown' && viewportWidth >= LARGE_VIEWPORT_WIDTH
  const isCompact = deviceCategory === 'mobile'

  useEffect(() => {
    const id = setInterval(() => {
      setActiveHeroTab((useUIStore.getState().activeHeroTab + 1) % HERO_VARIANTS.length)
    }, AUTO_ROTATE_MS)
    return () => clearInterval(id)
  }, [setActiveHeroTab])

  return (
    <div className='p-3'>
      {/* add the h-dvh later if needed for the height */}
        <section id="home" className={cn(
          'relative overflow-hidden bg-ink pt-20 md:pt-22 rounded-3xl',
          isCompact && 'flex flex-col pt-16'
        )}>
          
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={variant.id}
            src={variant.image}
            alt={variant.headingLines.join(' ')}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="absolute inset-0 h-full w-full object-cover bg-center bg-no-repeat rounded-3xl"
          />
        </AnimatePresence>
      </div>

      <Container className={cn(
            'relative flex flex-col justify-end',
            isCompact
              ? 'flex-1 min-h-100 pb-10 pt-24'
              : cn('pb-16 pt-40 md:pb-24', 'md:min-h-195', isLargeUnknownDevice && 'md:pb-28')
          )}>
        <AnimatePresence mode="wait">
          <motion.h1
            key={variant.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="max-w-3xl font-display text-4xl font-medium leading-[1.05] text-white md:text-7xl"
          >
            {variant.headingLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < variant.headingLines.length - 1 && <br className="hidden md:block" />}
                {i < variant.headingLines.length - 1 && ' '}
              </span>
            ))}
          </motion.h1>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT }}
          className="mt-9"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={variant.ctaLabel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={() => navigate('/contact-us')}>{variant.ctaLabel}</Button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT }}
        className="relative"
      >
        <Container className="grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 md:grid-cols-6">
          {HERO_VARIANTS.map((item, index) => {
            const isActive = index === activeHeroTab
            return (
              <button
                key={item.id}
                onClick={() => setActiveHeroTab(index)}
                className={cn(
                  'relative p-6 text-left cursor-pointer text-xs md:text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300',
                  isActive
                    ? 'bg-lime text-ink'
                    : 'bg-cream/95 text-ink/70 backdrop-blur-sm hover:bg-cream'
                )}
              >
                {item.badge}
                {isActive && (
                  <motion.span
                    layoutId="hero-tab-underline"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-ink"
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                  />
                )}
              </button>
            )
          })}
        </Container>
      </motion.div>
    </section>
    </div>
  )
}
