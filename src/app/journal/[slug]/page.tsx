import { notFound }          from 'next/navigation'
import type { Metadata }      from 'next'
import Image                  from 'next/image'
import { getPostBySlug, journalPosts } from '../../../../content/journal'
import { TextBlock }          from '@/components/ui/TextBlock'
import { JournalCard }        from '@/components/ui/JournalCard'
import { Button }             from '@/components/ui/Button'
import { FadeIn }             from '@/components/ui/FadeIn'
import { Section }            from '@/components/layout/Section'
import { formatDate }         from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title:       post.title,
    description: post.excerpt,
    openGraph:   { images: [{ url: post.coverImage }] },
  }
}

export default function JournalPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = journalPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3)

  return (
    <>
      {/* ─── COVER ───────────────────────────────────────────────── */}
      <div className="relative h-[65vh] min-h-[500px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950/85" />

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs tracking-wide3 uppercase text-stone-400">
                {post.category}
              </span>
              <span className="text-stone-700">·</span>
              <span className="text-xs text-stone-400">{formatDate(post.date)}</span>
              <span className="text-stone-700">·</span>
              <span className="text-xs text-stone-400">{post.readTime} min read</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-stone-50 leading-tight max-w-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-stone-400 text-sm">By {post.author}</p>
          </FadeIn>
        </div>
      </div>

      {/* ─── ARTICLE ─────────────────────────────────────────────── */}
      <Section className="py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 xl:gap-24">

          {/* Body */}
          <div>
            <FadeIn>
              {/* Excerpt / standfirst */}
              <p className="font-display text-xl md:text-2xl italic text-stone-600 leading-relaxed pb-10 mb-10 border-b border-stone-200">
                {post.excerpt}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <TextBlock blocks={post.content} />
            </FadeIn>
          </div>

          {/* Sticky sidebar */}
          <FadeIn direction="left" delay={0.2}>
            <aside className="lg:border-l lg:border-stone-200 lg:pl-10 space-y-8 lg:sticky lg:top-28 self-start">
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-400 mb-2">Author</p>
                <p className="text-sm text-stone-800">{post.author}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-400 mb-2">Published</p>
                <p className="text-sm text-stone-800">{formatDate(post.date)}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-400 mb-2">Category</p>
                <p className="text-sm text-stone-800">{post.category}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-400 mb-2">Read Time</p>
                <p className="text-sm text-stone-800">{post.readTime} minutes</p>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <Button href="/journal" variant="ghost" className="px-0">
                  ← All Posts
                </Button>
              </div>
            </aside>
          </FadeIn>
        </div>
      </Section>

      {/* ─── RELATED POSTS ───────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-stone-50">
          <div className="px-8 md:px-16 max-w-screen-2xl mx-auto">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-12 leading-none">
                More from the Journal
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.08}>
                  <JournalCard post={p} variant="default" />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
