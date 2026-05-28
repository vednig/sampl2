import type { Metadata }  from 'next'
import Image              from 'next/image'
import Link               from 'next/link'
import { journalPosts }   from '../../../content/journal'
import { siteConfig }     from '../../../content/siteConfig'
import { JournalCard }    from '@/components/ui/JournalCard'
import { FadeIn }         from '@/components/ui/FadeIn'
import { Section }        from '@/components/layout/Section'
import { formatDate }     from '@/lib/utils'

export const metadata: Metadata = {
  title:       'Journal',
  description: `Writing on architecture, materials, and ideas from ${siteConfig.studio.name}.`,
}

export default function JournalPage() {
  // Sort newest first, split featured from rest
  const sorted   = [...journalPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [hero, ...rest] = sorted

  return (
    <>
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-8 md:px-16 bg-stone-950">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">Ideas & Writing</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] text-stone-50 leading-none">
              Journal
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ─── HERO POST ───────────────────────────────────────────── */}
      <Section className="pt-16 pb-16 border-b border-stone-200">
        <FadeIn>
          <Link
            href={`/journal/${hero.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={hero.coverImage}
                alt={hero.title}
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs tracking-wide3 uppercase text-stone-500">
                  {hero.category}
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-xs text-stone-400">{formatDate(hero.date)}</span>
                <span className="text-stone-300">·</span>
                <span className="text-xs tracking-wide2 uppercase text-stone-400 border border-stone-200 px-2 py-0.5">
                  Latest
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 group-hover:text-stone-600 transition-colors leading-tight mb-5">
                {hero.title}
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6 line-clamp-3">{hero.excerpt}</p>
              <p className="text-xs text-stone-400">
                {hero.readTime} min read · {hero.author}
              </p>
            </div>
          </Link>
        </FadeIn>
      </Section>

      {/* ─── POST GRID ───────────────────────────────────────────── */}
      <Section className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {rest.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.08}>
              <JournalCard post={post} variant="default" />
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  )
}
