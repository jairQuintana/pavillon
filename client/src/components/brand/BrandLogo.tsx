type BrandLogoColor = 'ink' | 'cream' | 'sand'

const colorStyles: Record<BrandLogoColor, string> = {
  ink: 'text-ink-500',
  cream: 'text-cream-500',
  sand: 'text-sand-500',
}

interface BrandLogoProps {
  color?: BrandLogoColor
}

const BrandLogo = ({ color = 'cream' }: BrandLogoProps) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="bg-sand-500 h-px w-10 opacity-100" />
      <p className={`font-display text-2xl font-light tracking-[9px] uppercase ${colorStyles[color]}`}>
        Pavillon
      </p>
      <p className="font-ui text-sand-500 text-[9px] font-light tracking-[4px] uppercase">
        Private Sports Club
      </p>
      <div className="bg-sand-500 h-px w-10 opacity-100" />
    </div>
  )
}

export default BrandLogo
