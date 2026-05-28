import type { Metadata }  from 'next'
import Image              from 'next/image'
import { studioData }     from '../../../content/studio'
import { siteConfig }     from '../../../content/siteConfig'
import { FadeIn }         from '@/components/ui/FadeIn'
import { Button }         from '@/components/ui/Button'
import { Section }        from '@/components/layout/Section'

export const metadata: Metadata = {
  title:       'Studio',
  description: `About ${siteConfig.studio.name} — ${studioData.architectName} and the team.`,
}

export default function StudioPage() {
  return (
    <>
      {/* ─── HEADER ────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-8 md:px-16 bg-stone-950">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-5">The Studio</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] text-stone-50 leading-none">
              {siteConfig.studio.name}
            </h1>
            <p className="font-display text-2xl md:text-3xl italic text-stone-400 mt-4">
              {studioData.architectName} · {studioData.role}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── BIO ───────────────────────────────────────────────────── */}
      <Section className="py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <div className="relative aspect-[3/4] overflow-hidden lg:sticky lg:top-28">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200"
                alt={studioData.architectName}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn direction="right">
              <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-8">Biography</p>
              <div className="space-y-6">
                {studioData.bio.map((para, i) => (
                  <p key={i} className="text-base md:text-lg text-stone-700 leading-relaxed">{para}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="border-t border-stone-200 pt-10">
                <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-7">Awards & Recognition</p>
                <div className="space-y-5">
                  {studioData.awards.map((a, i) => (
                    <div key={i} className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-sm text-stone-800">{a.title}</p>
                        <p className="text-xs text-stone-500 mt-0.5">{a.body}</p>
                      </div>
                      <span className="text-xs font-mono text-stone-400 shrink-0">{a.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ─── PHILOSOPHY ────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-stone-950">
        <div className="px-8 md:px-16 max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-7">Philosophy</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-stone-100 leading-tight mb-16 max-w-4xl">
              {studioData.philosophy.headline}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {studioData.philosophy.body.map((para, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-stone-400 text-sm leading-relaxed">{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ──────────────────────────────────────────────────── */}
      <Section className="py-28 md:py-40">
        <FadeIn>
          <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">The People</p>
          <h2 className="font-display text-5xl md:text-6xl text-stone-900 mb-14 leading-none">Team</h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {studioData.team.map((member, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display text-xl text-stone-900">{member.name}</h3>
                <p className="text-xs tracking-wide text-stone-500 mt-0.5">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ─── TIMELINE ──────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-stone-50">
        <div className="px-8 md:px-16 max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">History</p>
            <h2 className="font-display text-5xl md:text-6xl text-stone-900 mb-16 leading-none">Timeline</h2>
          </FadeIn>

          <div className="space-y-0">
            {studioData.timeline.map((entry, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 py-8 border-b border-stone-200">
                  <span className="font-mono text-sm text-stone-400 md:text-right pt-0.5">{entry.year}</span>
                  <div>
                    <h3 className="font-display text-2xl text-stone-900 mb-2">{entry.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed max-w-xl">{entry.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <Section className="py-24 md:py-32 border-t border-stone-200">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-3">
                Interested in working together?
              </h2>
              <p className="text-stone-500 text-sm max-w-lg">
                We accept a limited number of commissions each year. We&apos;d love to hear about your project.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="shrink-0">
              Get in Touch →
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
