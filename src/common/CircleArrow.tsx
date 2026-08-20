import { motion } from 'framer-motion'
import { cn } from '@lib/utils'
import { ArrowIcon } from './Icon'

interface CircleArrowProps {
  tone?: 'onLight' | 'onDark' | 'onLime'
  size?: 'sm' | 'md'
  className?: string
}

const TONE_CLASSES: Record<string, string> = {
  onLight: 'bg-white text-ink',
  onDark: 'bg-lime text-ink',
  onLime: 'bg-ink text-lime',
}

export function CircleArrow({ tone = 'onLight', size = 'md', className }: CircleArrowProps) {
  return (
    <motion.span
      whileHover={{ rotate: 45 }}
      transition={{ duration: 0.25 }}
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full shadow-sm',
        size === 'md' ? 'h-11 w-11' : 'h-9 w-9',
        TONE_CLASSES[tone],
        className
      )}
    >
      <ArrowIcon className={size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
    </motion.span>
  )
}
