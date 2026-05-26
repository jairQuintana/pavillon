import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  isLoading?: boolean
  loadingText?: string
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
}

const Button = ({
  children,
  isLoading = false,
  loadingText,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      className="bg-ink-500 text-cream-500 mt-1 w-full rounded-(--radius-btn) py-3 text-xs font-medium tracking-[1.8px] uppercase transition-opacity hover:opacity-80 disabled:opacity-35"
    >
      {isLoading && loadingText ? loadingText : children}
    </button>
  )
}

export default Button
