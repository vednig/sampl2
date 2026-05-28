import type { Metadata } from 'next'
import { services }       from '../../../content/services'
import { siteConfig }     from '../../../content/siteConfig'
import { FadeIn }         from '@/components/ui/FadeIn'
import { Button }         from '@/components/ui/Button'
import { Section }        from '@/components/layout/Section'

export const metadata: Metadata = {
  title:       'Services',
  description: `Architecture and design services offered by ${siteConfig.studio.name}.`,
}

const process = [
  {
    step:  '01',
    title: 'Listen',
    body:  'Every project begins with deep listening — to the site, the brief, and the people who will inhabit the space. We resist the urge to design before we understand.',
  },
  {
    step:  '02',
    title: 'Conceive',
    body:  'We develop concepts rooted in the specifics of each situation, not borrowed from a prior aesthetic vocabulary. The idea must earn its existence.',
  },
  {
    step:  '03',
    title: 'Refine',
    body:  'Through iterative drawing, modelling, and material study, we compress the concept into its most essential form. Complexity is earned, not imposed.',
  },
  {
    step:  '04',
    title: 'Build',
    body:  'We stay deeply engaged through construction, ensuring that the precision of the concept survives the reality of building. Details are not afterthoughts.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-8 md:px-16 bg-stone-950">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">What We Offer</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] text-stone-50 leading-none">
              Services
            </h1>
            <p className="text-stone-400 text-base mt-5 max-w-xl">
              We work across scales and typologies, always bringing the same level of rigour
              and craft to each commission.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICE LIST ────────────────────────────────────────── */}
      <Section className="py-20 md:py-32">
        <div className="border-t border-stone-200">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <div className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-16 py-14 border-b border-stone-200 hover:bg-stone-50/70 transition-colors duration-300 px-2">

                {/* Index + icon */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:w-20">
                  <span className="font-mono text-xs text-stone-400">0{i + 1}</span>
                  <span className="font-mono text-4xl text-stone-200 group-hover:text-stone-400 transition-colors">
                    {service.icon}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Detail list */}
                <div>
                  <p className="text-xs tracking-wide3 uppercase text-stone-400 mb-4">
                    Scope Includes
                  </p>
                  <ul className="space-y-2.5">
                    {service.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-stone-500">
                        <span className="text-stone-300 shrink-0 mt-0.5">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-stone-950">
        <div className="px-8 md:px-16 max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-6">How We Work</p>
            <h2 className="font-display text-5xl md:text-6xl text-stone-100 mb-16 leading-none">
              Our Process
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-stone-800">
            {process.map((phase, i) => (
              <FadeIn key={phase.step} delay={i * 0.08}>
                <div className="py-10 md:pr-8 border-b lg:border-b-0 lg:border-r border-stone-800 last:border-r-0 lg:pl-8 first:pl-0">
                  <p className="font-mono text-xs text-stone-600 mb-6">{phase.step}</p>
                  <h3 className="font-display text-3xl text-stone-100 mb-4">{phase.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{phase.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <Section className="py-24 md:py-32 border-t border-stone-200">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-3">
                Have a project in mind?
              </h2>
              <p className="text-stone-500 text-sm max-w-lg">
                Tell us about your vision and we&apos;ll schedule an initial conversation.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="shrink-0">
              Start a Conversation →
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
