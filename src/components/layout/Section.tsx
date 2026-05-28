import { cn } from '@/lib/utils'

interface SectionProps {
  children:   React.ReactNode
  className?: string
  id?:        string
  full?:      boolean   // skip max-width constraint
  as?:        'section' | 'div' | 'article'
}

export function Section({
  children,
  className,
  id,
  full = false,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn('px-8 md:px-16', className)}
    >
      <div className={cn(!full && 'max-w-screen-2xl mx-auto')}>
        {children}
      </div>
    </Tag>
  )
}
