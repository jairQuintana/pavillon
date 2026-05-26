interface FormFieldProps {
  label: string
  type: string
  name: string
  placeholder: string
  required?: boolean
  hasError?: boolean
}

const FormField = ({ label, type, name, placeholder, required = false, hasError = false }: FormFieldProps) => {
  return (
    <div className="mb-5">
      <label className="text-ink-500 mb-1.5 block text-[0.7rem] font-medium tracking-[1.2px] uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`text-ink-500 placeholder-sand-500 w-full rounded-(--radius-input) border bg-white px-3.5 py-2.5 text-[1rem] transition-colors outline-none ${
          hasError
            ? 'border-alert-500 focus:border-alert-500'
            : 'border-sand-500 focus:border-ink-500'
        }`}
      />
    </div>
  )
}

export default FormField
