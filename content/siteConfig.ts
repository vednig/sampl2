import type { SiteConfig } from '../src/types/content'

export const siteConfig: SiteConfig = {
  studio: {
    name:        'FORMA',
    tagline:     'Architecture & Design Studio',
    description: 'FORMA is a studio rooted in the belief that architecture shapes how we feel, think, and live. We design spaces that endure.',
    founded:     2008,
  },
  contact: {
    email: 'hello@forma-studio.com',
    phone: '+1 (212) 555 0190',
    address: {
      street:  '142 Greene Street, Studio 4F',
      city:    'New York',
      country: 'United States',
      zip:     'NY 10012',
    },
    social: {
      instagram: 'https://instagram.com',
      linkedin:  'https://linkedin.com',
      pinterest: 'https://pinterest.com',
    },
  },
  seo: {
    defaultTitle:  'FORMA — Architecture & Design Studio',
    titleTemplate: '%s — FORMA',
    description:   'Award-winning architecture studio based in New York. Residential, commercial, and cultural spaces of lasting significance.',
    ogImage:       'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200',
  },
  nav: [
    { label: 'Studio',   href: '/studio'   },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Journal',  href: '/journal'  },
    { label: 'Contact',  href: '/contact'  },
  ],
}
