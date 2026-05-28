import Image              from 'next/image'
import type { JournalBlock } from '@/types/content'

export function TextBlock({ blocks }: { blocks: JournalBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {

          case 'paragraph':
            return (
              <p key={i} className="font-sans text-base md:text-lg text-stone-700 leading-[1.85] mb-7">
                {block.text}
              </p>
            )

          case 'heading':
            return block.level === 2 ? (
              <h2 key={i} className="font-display text-3xl md:text-4xl text-stone-900 mt-14 mb-6">
                {block.text}
              </h2>
            ) : (
              <h3 key={i} className="font-display text-2xl text-stone-900 mt-10 mb-5">
                {block.text}
              </h3>
            )

          case 'quote':
            return (
              <blockquote key={i} className="border-l-2 border-stone-300 pl-8 my-12">
                <p className="font-display text-2xl md:text-3xl italic text-stone-600 leading-snug">
                  {block.text}
                </p>
                {block.attribution && (
                  <cite className="block mt-4 text-xs tracking-wide3 uppercase text-stone-500 not-italic">
                    — {block.attribution}
                  </cite>
                )}
              </blockquote>
            )

          case 'image':
            return (
              <figure key={i} className="my-12">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={block.url}
                    alt={block.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-xs text-stone-500 tracking-wide">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
