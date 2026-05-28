import type { Metadata } from 'next'
import { siteConfig }     from '../../../content/siteConfig'
import { ContactForm }    from '@/components/ui/ContactForm'
import { FadeIn }         from '@/components/ui/FadeIn'
import { Section }        from '@/components/layout/Section'

export const metadata: Metadata = {
  title:       'Contact',
  description: `Get in touch with ${siteConfig.studio.name} to discuss your project.`,
}

export default function ContactPage() {
  return (
    <>
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-8 md:px-16 bg-stone-950">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">Get in Touch</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] text-stone-50 leading-none">
              Contact
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ─── BODY ────────────────────────────────────────────────── */}
      <Section className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

          {/* Info column */}
          <FadeIn direction="left">
            <div className="space-y-14">

              {/* Address */}
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-5">
                  Studio Address
                </p>
                <address className="not-italic text-stone-700 text-sm leading-loose">
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.zip}<br />
                  {siteConfig.contact.address.country}
                </address>
              </div>

              {/* Direct contact */}
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-5">
                  Direct Contact
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="block text-stone-700 hover:text-stone-950 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="block text-stone-700 hover:text-stone-950 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-5">Follow</p>
                <div className="flex gap-6">
                  {siteConfig.contact.social.instagram && (
                    <a
                      href={siteConfig.contact.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-wide3 uppercase text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                  {siteConfig.contact.social.linkedin && (
                    <a
                      href={siteConfig.contact.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-wide3 uppercase text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {siteConfig.contact.social.pinterest && (
                    <a
                      href={siteConfig.contact.social.pinterest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-wide3 uppercase text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      Pinterest
                    </a>
                  )}
                </div>
              </div>

              {/* Note */}
              <div className="border-t border-stone-200 pt-10">
                <p className="text-xs tracking-wide3 uppercase text-stone-500 mb-4">
                  New Commissions
                </p>
                <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
                  We accept a limited number of projects each year to maintain the quality of
                  attention every commission deserves. Introductory calls are free and without
                  obligation.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form column — client component */}
          <FadeIn direction="right" delay={0.12}>
            <ContactForm />
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
