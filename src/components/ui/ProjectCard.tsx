import Image from 'next/image'
import Link  from 'next/link'
import type { Project } from '@/types/content'
import { cn }          from '@/lib/utils'

interface ProjectCardProps {
  project:   Project
  variant?:  'default' | 'featured' | 'hero'
  index?:    number
  className?: string
}

export function ProjectCard({
  project,
  variant   = 'default',
  index     = 0,
  className,
}: ProjectCardProps) {
  const img = project.images[0]

  /* ── Hero: large half-screen card for homepage ── */
  if (variant === 'hero') {
    return (
      <Link href={`/projects/${project.slug}`} className={cn('group relative block overflow-hidden', className)}>
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={img.url}
            alt={img.alt}
            fill
            priority={index < 2}
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/20 transition-colors duration-500" />
        </div>
        <div className="flex items-start justify-between pt-5 gap-4">
          <div>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-1.5">{project.category} · {project.year}</p>
            <h3 className="font-display text-2xl text-stone-900 group-hover:text-stone-600 transition-colors">{project.title}</h3>
            <p className="text-sm text-stone-500 mt-0.5">{project.location}</p>
          </div>
          <span className="shrink-0 mt-1 text-stone-300 group-hover:text-stone-700 transition-colors text-lg">→</span>
        </div>
      </Link>
    )
  }

  /* ── Featured: tall 3/4 card for project grid ── */
  if (variant === 'featured') {
    return (
      <Link href={`/projects/${project.slug}`} className={cn('group block', className)}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={img.url}
            alt={img.alt}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs tracking-wide3 uppercase text-stone-400 mb-2">{project.category}</p>
            <h3 className="font-display text-3xl text-stone-50">{project.title}</h3>
            <p className="text-stone-400 text-sm mt-1">{project.location} · {project.year}</p>
          </div>
        </div>
      </Link>
    )
  }

  /* ── Default: portrait card for project listing ── */
  return (
    <Link href={`/projects/${project.slug}`} className={cn('group block', className)}>
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={img.url}
          alt={img.alt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-[1.04]"
        />
        {project.status !== 'Completed' && (
          <div className="absolute top-4 left-4">
            <span className="text-xs tracking-wide2 uppercase text-stone-200 bg-stone-900/70 px-2.5 py-1">
              {project.status}
            </span>
          </div>
        )}
      </div>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-1.5">{project.category}</p>
            <h3 className="font-display text-2xl text-stone-900 group-hover:text-stone-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-stone-500 mt-0.5">{project.location}</p>
          </div>
          <span className="text-xs text-stone-400 font-mono shrink-0 mt-1">{project.year}</span>
        </div>
      </div>
    </Link>
  )
}
