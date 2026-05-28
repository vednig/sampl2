import { notFound }          from 'next/navigation'
import type { Metadata }      from 'next'
import { getProjectBySlug, projects } from '../../../../content/projects'
import { ImageGrid }          from '@/components/ui/ImageGrid'
import { ProjectCard }        from '@/components/ui/ProjectCard'
import { Button }             from '@/components/ui/Button'
import { FadeIn }             from '@/components/ui/FadeIn'
import { Section }            from '@/components/layout/Section'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title:       project.title,
    description: project.shortDescription,
    openGraph:   { images: [{ url: project.images[0].url }] },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2)

  return (
    <>
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-10 md:pt-44 md:pb-14 px-8 md:px-16 bg-stone-950">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-600 mb-8">
              <span>Projects</span>
              <span>/</span>
              <span>{project.category}</span>
              <span>/</span>
              <span className="text-stone-400">{project.title}</span>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs tracking-wide3 uppercase text-stone-500 border border-stone-700 px-3 py-1">
                {project.category}
              </span>
              <span className="text-xs tracking-wide3 uppercase text-stone-500 border border-stone-700 px-3 py-1">
                {project.year}
              </span>
              {project.status !== 'Completed' && (
                <span className="text-xs tracking-wide3 uppercase text-stone-400 border border-stone-600 px-3 py-1">
                  {project.status}
                </span>
              )}
            </div>

            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] text-stone-50 leading-none mb-4">
              {project.title}
            </h1>
            <p className="font-display text-xl italic text-stone-400">{project.location}</p>
          </FadeIn>
        </div>
      </section>

      {/* ─── IMAGE GRID ──────────────────────────────────────────── */}
      <div className="px-8 md:px-16 py-6 max-w-screen-2xl mx-auto">
        <ImageGrid images={project.images} layout="hero" />
      </div>

      {/* ─── CONTENT + SPECS ─────────────────────────────────────── */}
      <Section className="py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Description */}
          <div className="lg:col-span-2">
            <FadeIn>
              <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-6">
                Project Overview
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-[1.85]">
                {project.description}
              </p>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wide2 uppercase text-stone-500 border border-stone-300 px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>

          {/* Specs sidebar */}
          <FadeIn direction="left" delay={0.15}>
            <div className="lg:border-l lg:border-stone-200 lg:pl-10 space-y-7">
              <p className="text-xs tracking-wide3 uppercase text-stone-500">
                Project Details
              </p>

              {(
                [
                  ['Location', project.location],
                  ['Year',     String(project.year)],
                  ['Type',     project.category],
                  ['Status',   project.status],
                  project.area   ? ['Area',   project.area]   : null,
                  project.client ? ['Client', project.client] : null,
                ] as Array<[string, string] | null>
              )
                .filter(Boolean)
                .map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs text-stone-400 mb-1">{label}</p>
                    <p className="text-sm text-stone-800">{value}</p>
                  </div>
                ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ─── RELATED PROJECTS ────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-stone-50">
          <div className="px-8 md:px-16 max-w-screen-2xl mx-auto">
            <FadeIn>
              <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">
                More Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-12 leading-none">
                Related Projects
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {related.map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.1}>
                  <ProjectCard project={p} variant="featured" index={i} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BACK LINK ───────────────────────────────────────────── */}
      <Section className="py-14 border-t border-stone-200">
        <Button href="/projects" variant="ghost">← Back to Projects</Button>
      </Section>
    </>
  )
}
