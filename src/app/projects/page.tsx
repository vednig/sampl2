import type { Metadata }    from 'next'
import { projects }          from '../../../content/projects'
import { siteConfig }        from '../../../content/siteConfig'
import { ProjectFilter }     from '@/components/ui/ProjectFilter'
import { FadeIn }            from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title:       'Projects',
  description: `All architecture projects by ${siteConfig.studio.name}.`,
}

export default function ProjectsPage() {
  return (
    <>
      {/* Header — server rendered */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-8 md:px-16 bg-stone-950">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">Our Work</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] text-stone-50 leading-none">
              Projects
            </h1>
            <p className="text-stone-400 text-base mt-5 max-w-lg">
              A selection of completed, in-progress, and conceptual work across residential,
              commercial, interior, and cultural typologies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + Grid — client component */}
      <ProjectFilter projects={projects} />
    </>
  )
}
