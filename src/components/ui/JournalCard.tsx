import Image         from 'next/image'
import Link          from 'next/link'
import type { JournalPost } from '@/types/content'
import { cn, formatDate }   from '@/lib/utils'

interface JournalCardProps {
  post:       JournalPost
  variant?:   'default' | 'minimal' | 'horizontal'
  className?: string
}

export function JournalCard({ post, variant = 'default', className }: JournalCardProps) {

  if (variant === 'minimal') {
    return (
      <Link href={`/journal/${post.slug}`} className={cn('group flex items-start justify-between gap-6 py-6 border-b border-stone-200', className)}>
        <div>
          <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-1.5">{post.category}</p>
          <h3 className="font-display text-xl text-stone-900 group-hover:text-stone-500 transition-colors">
            {post.title}
          </h3>
        </div>
        <span className="text-xs text-stone-400 shrink-0 pt-1">{formatDate(post.date)}</span>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link href={`/journal/${post.slug}`} className={cn('group flex gap-7 items-start', className)}>
        <div className="relative w-40 h-28 shrink-0 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="160px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div>
          <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-2">{post.category}</p>
          <h3 className="font-display text-xl text-stone-900 group-hover:text-stone-500 transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-xs text-stone-400 mt-2">{formatDate(post.date)} · {post.readTime} min</p>
        </div>
      </Link>
    )
  }

  // default editorial card
  return (
    <Link href={`/journal/${post.slug}`} className={cn('group block', className)}>
      <div className="relative overflow-hidden aspect-[16/10] mb-5">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-2">{post.category} · {formatDate(post.date)}</p>
      <h3 className="font-display text-2xl text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-stone-500 line-clamp-2 mb-3">{post.excerpt}</p>
      <p className="text-xs text-stone-400">{post.readTime} min · {post.author}</p>
    </Link>
  )
}
