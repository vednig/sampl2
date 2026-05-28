import Image           from 'next/image'
import Link            from 'next/link'
import { getFeaturedProjects }  from '../../content/projects'
import { getRecentPosts }       from '../../content/journal'
import { services }             from '../../content/services'
import { studioData }           from '../../content/studio'
import { siteConfig }           from '../../content/siteConfig'
import { ProjectCard }  from '@/components/ui/ProjectCard'
import { JournalCard }  from '@/components/ui/JournalCard'
import { Button }       from '@/components/ui/Button'
import { FadeIn }       from '@/components/ui/FadeIn'
import { Section }      from '@/components/layout/Section'

export default function HomePage() {
  const featured = getFeaturedProjects()
  const posts    = getRecentPosts(3)

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=2400"
          alt="FORMA architecture studio hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/25 via-stone-950/10 to-stone-950/75" />

        {/* Vertical tagline — desktop only */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
          <span className="writing-vertical text-xs tracking-wide4 uppercase text-stone-500">
            {siteConfig.studio.tagline}
          </span>
          <span className="w-px h-14 bg-stone-600" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-screen-2xl">
          <p
            className="text-xs tracking-wide4 uppercase text-stone-400 mb-5"
            style={{ animation: 'heroIn 1s 0.1s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            Est. {siteConfig.studio.founded} · {siteConfig.contact.address.city}
          </p>

          <h1
            className="font-display text-[clamp(4rem,12vw,11rem)] text-stone-50 leading-none tracking-tight"
            style={{ animation: 'heroIn 1.2s 0.2s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            {siteConfig.studio.name}
          </h1>

          <p
            className="mt-6 text-base md:text-xl text-stone-300 font-light max-w-lg"
            style={{ animation: 'heroIn 1s 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            {siteConfig.studio.description}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{ animation: 'heroIn 1s 0.5s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <Button href="/projects" variant="light">View Projects →</Button>
            <Button href="/studio"   variant="ghost" className="text-stone-400 hover:text-stone-100">
              Our Studio
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-wide3 uppercase text-stone-500">Scroll</span>
          <span className="w-px h-10 bg-stone-600" />
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─────────────────────────────────────── */}
      <Section className="py-28 md:py-40">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-3">Selected Work</p>
              <h2 className="font-display text-5xl md:text-6xl text-stone-900 leading-none">
                Featured Projects
              </h2>
            </div>
            <Button href="/projects" variant="ghost" className="hidden md:inline-flex">
              All Projects →
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <ProjectCard project={p} variant="default" index={i} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button href="/projects" variant="outline">All Projects →</Button>
        </div>
      </Section>

      {/* ─── STUDIO PREVIEW ────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-stone-950">
        <div className="px-8 md:px-16 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200"
                alt={studioData.architectName}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-stone-950/50 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-6">The Studio</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-100 leading-tight mb-8">
              {studioData.philosophy.headline}
            </h2>
            <p className="text-stone-400 text-base leading-relaxed mb-4">{studioData.bio[0]}</p>
            <p className="text-stone-500 text-sm leading-relaxed mb-10">
              {studioData.philosophy.body[0]}
            </p>
            <Button href="/studio" variant="light">
              About {siteConfig.studio.name} →
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ──────────────────────────────────────── */}
      <Section className="py-28 md:py-40">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-3">What We Do</p>
              <h2 className="font-display text-5xl md:text-6xl text-stone-900 leading-none">Services</h2>
            </div>
            <Button href="/services" variant="ghost" className="hidden md:inline-flex">
              All Services →
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-stone-200">
          {services.slice(0, 3).map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.08}>
              <div className="border-b md:border-b-0 md:border-r border-stone-200 last:border-r-0 p-8 md:p-10 hover:bg-stone-50 transition-colors duration-300">
                <span className="font-mono text-3xl text-stone-300 block mb-6">{s.icon}</span>
                <h3 className="font-display text-2xl text-stone-900 mb-3">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ─── JOURNAL PREVIEW ───────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-stone-50">
        <div className="px-8 md:px-16 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-3">Thinking</p>
                <h2 className="font-display text-5xl md:text-6xl text-stone-900 leading-none">Journal</h2>
              </div>
              <Button href="/journal" variant="ghost" className="hidden md:inline-flex">
                All Posts →
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <JournalCard post={post} variant="default" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000"
          alt="Architecture detail"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/78" />
        <div className="relative z-10 px-8 md:px-16 max-w-screen-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-wide4 uppercase text-stone-400 mb-6">
              Start a conversation
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-stone-50 mb-10 leading-tight">
              Let&apos;s build something<br /><em>that endures.</em>
            </h2>
            <Button href="/contact" variant="light">Get in Touch →</Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
