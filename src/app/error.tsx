'use client'

import { useEffect } from 'react'
import { Button }    from '@/components/ui/Button'

interface ErrorProps {
  error:  Error & { digest?: string }
  reset:  () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <p className="font-mono text-xs tracking-wide3 uppercase text-stone-400 mb-4">
        Something went wrong
      </p>
      <h1 className="font-display text-5xl md:text-7xl text-stone-900 mb-6">
        Unexpected Error
      </h1>
      <p className="text-stone-500 text-sm max-w-sm mb-10">
        An error occurred while rendering this page. Please try again.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" onClick={reset}>Try again</Button>
        <Button variant="ghost"   href="/">Return Home</Button>
      </div>
    </div>
  )
}
