'use client'

import { useRef }               from 'react'
import { motion, useInView }    from 'framer-motion'
import { cn }                   from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children:   React.ReactNode
  className?: string
  delay?:     number
  duration?:  number
  direction?: Direction
  once?:      boolean
  amount?:    number | 'some' | 'all'
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { y: 30,  x: 0  },
  down:  { y: -30, x: 0  },
  left:  { y: 0,   x: 30 },
  right: { y: 0,   x: -30},
  none:  { y: 0,   x: 0  },
}

export function FadeIn({
  children,
  className,
  delay     = 0,
  duration  = 0.75,
  direction = 'up',
  once      = true,
  amount    = 0.1,
}: FadeInProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const inView  = useInView(ref, { once, margin: '-60px', amount })
  const { x, y } = offsets[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
