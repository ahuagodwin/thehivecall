import { motion } from 'framer-motion'
import type { PropsWithChildren, MouseEventHandler } from 'react'
import { cn } from '@lib/utils'
import { ArrowIcon } from './Icon'

interface ButtonProps {
  variant?: 'primary' | 'dark' | 'ghost'
  withArrow?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const VARIANT_CLASSES: Record<string, string> = {
  primary: 'bg-lime text-ink hover:bg-lime-dark',
  dark: 'bg-ink text-white hover:bg-ink-light',
  ghost: 'bg-transparent text-ink border border-ink/20 hover:border-ink/40',
}

export function Button({
  children,
  variant = 'primary',
  withArrow = true,
  loading = false,
  className,
  disabled,
  type = 'button',
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <motion.button
        type={type}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        disabled={disabled || loading}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60',
          VARIANT_CLASSES[variant],
          className
        )}
      >
        {loading ? 'Please wait…' : children}
      </motion.button>
      {withArrow && (
        <motion.span
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.25 }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime text-ink"
        >
          <ArrowIcon className="h-4 w-4" />
        </motion.span>
      )}
    </span>
  )
}
