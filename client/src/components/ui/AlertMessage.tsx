interface AlertMessageProps {
  message: string
  variant?: 'error' | 'success' | 'warning'
}

const variantStyles = {
  error: 'bg-alert-100  text-alert-500',
  success: 'bg-green-100  text-green-700',
  warning: 'bg-yellow-100  text-yellow-700',
}

const AlertMessage = ({ message, variant = 'error' }: AlertMessageProps) => {
  return (
    <div className={`mb-4 rounded-(--radius-input) px-3 py-2 text-xs ${variantStyles[variant]}`}>
      {message}
    </div>
  )
}

export default AlertMessage
