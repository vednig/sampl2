import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost' | 'light'

interface ButtonProps {
  children:   React.ReactNode
  href?:      string
  onClick?:   () => void
  variant?:   Variant
  className?: string
  external?:  boolean
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
}

const base =
  'inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-wide3 uppercase font-sans font-medium transition-all duration-300 cursor-pointer select-none'

const variants: Record<Variant, string> = {
  primary: 'bg-stone-900 text-stone-50 hover:bg-stone-700',
  outline: 'bg-transparent text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-stone-50',
  ghost:   'bg-transparent text-stone-600 hover:text-stone-900',
  light:   'bg-transparent text-stone-100 border border-stone-700 hover:border-stone-300 hover:text-stone-50',
}

export function Button({
  children,
  href,
  onClick,
  variant   = 'primary',
  className,
  external,
  type      = 'button',
  disabled,
}: ButtonProps) {
  const cls = cn(base, variants[variant], disabled && 'opacity-40 pointer-events-none', className)

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
