import { ReactNode } from 'react'
import Link from './Link'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

export const Button = ({ href, children, variant = 'solid', className = '' }: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
  const styles =
    variant === 'solid'
      ? 'bg-gray-900 text-white shadow-sm hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/20 dark:bg-primary-500 dark:hover:bg-primary-400 dark:text-gray-900'
      : 'border border-gray-300 text-gray-900 hover:border-primary-500 hover:text-primary-600 dark:border-gray-600 dark:text-gray-100 dark:hover:border-primary-400 dark:hover:text-primary-400'

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  )
}

interface BadgeProps {
  children: ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

export const Badge = ({ children, active = false, onClick, className = '' }: BadgeProps) => {
  const base =
    'inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150'
  const styles = active
    ? 'bg-gray-900 text-white dark:bg-primary-500 dark:text-gray-900'
    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </button>
    )
  }

  return <span className={`${base} ${styles} ${className}`}>{children}</span>
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => (
  <div className={`max-w-2xl space-y-3 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    {eyebrow && (
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
        <span className="h-px w-6 bg-primary-500" />
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
    )}
  </div>
)

interface StatProps {
  value: string
  label: string
}

export const Stat = ({ value, label }: StatProps) => (
  <div className="space-y-1">
    <div className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-400 sm:text-5xl">
      {value}
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
  </div>
)

interface PanelProps {
  children: ReactNode
  className?: string
}

export const Panel = ({ children, className = '' }: PanelProps) => (
  <div
    className={`rounded-3xl bg-gray-50 p-8 dark:bg-gray-800/40 sm:p-12 ${className}`}
  >
    {children}
  </div>
)
