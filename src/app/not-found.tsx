import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <p className="font-mono text-xs tracking-wide3 uppercase text-stone-400 mb-4">404</p>
      <h1 className="font-display text-6xl md:text-8xl text-stone-900 mb-4 leading-none">
        Not Found
      </h1>
      <p className="text-stone-500 text-sm max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" variant="outline">← Return Home</Button>
    </div>
  )
}
