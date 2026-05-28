import type { ReactNode } from 'react'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingFont = 'display' | 'ui'
type HeadingColor = 'ink' | 'cream' | 'sand'

interface HeadingProps {
  as?: HeadingTag
  children: ReactNode
  className?: string
  font?: HeadingFont
  color?: HeadingColor
}

const tagStyles: Record<HeadingTag, string> = {
  h1: 'text-4xl font-bold leading-tight',
  h2: 'text-3xl font-bold leading-tight',
  h3: 'text-2xl font-semibold leading-snug',
  h4: 'text-sm font-semibold tracking-[1px] uppercase',
  h5: 'text-xs font-semibold tracking-[1px] uppercase',
  h6: 'text-[0.7rem] font-semibold tracking-[1px] uppercase',
}

const fontStyles: Record<HeadingFont, string> = {
  display: 'font-display',
  ui: 'font-ui',
}

const colorStyles: Record<HeadingColor, string> = {
  ink: 'text-ink-500',
  cream: 'text-cream-500',
  sand: 'text-sand-500',
}

const Heading = ({ as: Tag = 'h2', children, className = '', font, color = 'ink' }: HeadingProps) => {
  const fontClass = font ? fontStyles[font] : ''
  return (
    <Tag className={`${colorStyles[color]} ${tagStyles[Tag]} ${fontClass} ${className}`}>
      {children}
    </Tag>
  )
}

export default Heading
