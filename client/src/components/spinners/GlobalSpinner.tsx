import { Loader2 } from 'lucide-react'

const GlobalSpinner = () => {
  return (
    <main className="flex h-dvh w-full items-center justify-center">
      <Loader2 size={50} className="text-forest animate-spin" />
    </main>
  )
}

export default GlobalSpinner
