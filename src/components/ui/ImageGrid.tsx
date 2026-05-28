'use client'

import { useState }         from 'react'
import Image                from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { ProjectImage } from '@/types/content'
import { cn }               from '@/lib/utils'

interface ImageGridProps {
  images:  ProjectImage[]
  layout?: 'hero' | 'grid'
}

export function ImageGrid({ images, layout = 'hero' }: ImageGridProps) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      {/* Grid */}
      {layout === 'hero' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Primary image */}
          <div
            className="relative overflow-hidden cursor-zoom-in"
            style={{ aspectRatio: '4/3' }}
            onClick={() => setActive(0)}
          >
            <Image
              src={images[0].url}
              alt={images[0].alt}
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-expo"
            />
          </div>

          {/* Secondary images */}
          {images.length > 1 && (
            <div className={cn('flex flex-col gap-2', images.slice(1).length === 1 ? '' : '')}>
              {images.slice(1, 3).map((img, i) => (
                <div
                  key={i}
                  className="relative flex-1 overflow-hidden cursor-zoom-in"
                  style={{ aspectRatio: images.slice(1, 3).length === 1 ? '4/3' : '16/9' }}
                  onClick={() => setActive(i + 1)}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-expo"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden aspect-square cursor-zoom-in"
              onClick={() => setActive(i)}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="33vw"
                className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-expo"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-stone-950/96 flex items-center justify-center p-6 md:p-16"
            onClick={() => setActive(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-8 text-xs tracking-wide3 uppercase text-stone-400 hover:text-stone-100 transition-colors"
              onClick={() => setActive(null)}
            >
              Close ✕
            </button>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 text-stone-500 hover:text-stone-100 transition-colors text-2xl"
                  onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length) }}
                >
                  ←
                </button>
                <button
                  className="absolute right-4 md:right-8 text-stone-500 hover:text-stone-100 transition-colors text-2xl"
                  onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length) }}
                >
                  →
                </button>
              </>
            )}

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={images[active].url}
                  alt={images[active].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              {images[active].caption && (
                <p className="mt-3 text-xs text-stone-500 text-center tracking-wide">
                  {images[active].caption}
                </p>
              )}
            </motion.div>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-stone-600 font-mono">
              {active + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
