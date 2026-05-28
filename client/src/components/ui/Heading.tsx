import { ReactNode } from 'react'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps {
  as?: HeadingTag
  children: ReactNode
  className?: string
}

const styles: Record<HeadingTag, string> = {
  h1: 'text-4xl font-bold leading-tight',
  h2: 'text-3xl font-bold leading-tight',
  h3: 'text-2xl font-semibold leading-snug',
  h4: 'text-sm font-semibold tracking-[1px] uppercase',
  h5: 'text-xs font-semibold tracking-[1px] uppercase',
  h6: 'text-[0.7rem] font-semibold tracking-[1px] uppercase',
}

const Heading = ({ as: Tag = 'h2', children, className = '' }: HeadingProps) => {
  return <Tag className={`text-ink-500 ${styles[Tag]} ${className}`}>{children}</Tag>
}

export default Heading
