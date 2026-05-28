import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '../../content/siteConfig'
import { Navbar }         from '@/components/layout/Navbar'
import { Footer }         from '@/components/layout/Footer'
import { PageTransition } from '@/components/layout/PageTransition'

export const metadata: Metadata = {
  title: {
    default:  siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type:      'website',
    siteName:  siteConfig.studio.name,
    images:    [{ url: siteConfig.seo.ogImage }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar config={siteConfig} />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer config={siteConfig} />
      </body>
    </html>
  )
}
