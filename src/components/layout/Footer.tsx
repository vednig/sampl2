import Link            from 'next/link'
import type { SiteConfig } from '@/types/content'

interface FooterProps {
  config: SiteConfig
}

export function Footer({ config }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-stone-500">
      <div className="px-8 md:px-16 max-w-screen-2xl mx-auto pt-20 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-20">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/">
              <span className="font-display text-4xl text-stone-100 tracking-wide3 block mb-5">
                {config.studio.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              {config.studio.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-xs tracking-wide3 uppercase text-stone-600 mb-5">Pages</p>
            <ul className="space-y-3">
              {config.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-500 hover:text-stone-200 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-9">
            <p className="text-xs tracking-wide3 uppercase text-stone-600 mb-5">Contact</p>
            <div className="space-y-2 text-sm mb-7">
              <a href={`mailto:${config.contact.email}`} className="block hover:text-stone-200 transition-colors">
                {config.contact.email}
              </a>
              <a href={`tel:${config.contact.phone}`} className="block hover:text-stone-200 transition-colors">
                {config.contact.phone}
              </a>
            </div>
            <address className="not-italic text-sm leading-loose text-stone-600">
              {config.contact.address.street}<br />
              {config.contact.address.city}, {config.contact.address.zip}<br />
              {config.contact.address.country}
            </address>
          </div>

          {/* Social */}
          <div className="md:col-span-1 md:col-start-12">
            <p className="text-xs tracking-wide3 uppercase text-stone-600 mb-5">Follow</p>
            <div className="flex flex-col gap-3">
              {config.contact.social.instagram && (
                <a href={config.contact.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-wide2 uppercase hover:text-stone-300 transition-colors">
                  IG
                </a>
              )}
              {config.contact.social.linkedin && (
                <a href={config.contact.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-wide2 uppercase hover:text-stone-300 transition-colors">
                  LI
                </a>
              )}
              {config.contact.social.pinterest && (
                <a href={config.contact.social.pinterest} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-wide2 uppercase hover:text-stone-300 transition-colors">
                  PT
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-stone-700">
            © {year} {config.studio.name}. All rights reserved.
          </p>
          <p className="text-xs text-stone-700 font-mono">
            Founded {config.studio.founded} · {config.contact.address.city}
          </p>
        </div>
      </div>
    </footer>
  )
}
