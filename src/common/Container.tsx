import type { PropsWithChildren } from 'react'
import { cn } from '@lib/utils'

interface ContainerProps {
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export function Container({
  children,
  className,
  as: Tag = 'div',
}: PropsWithChildren<ContainerProps>) {
  return <Tag className={cn('mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16', className)}>{children}</Tag>
}
