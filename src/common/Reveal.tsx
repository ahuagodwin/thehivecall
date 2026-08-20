import { motion, type Variants } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { fadeUp, viewportOnce } from '@constants/motion'

interface RevealProps {
  className?: string
  variants?: Variants
  delay?: number
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: PropsWithChildren<RevealProps>) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
