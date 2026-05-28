'use client'

import { useState, useEffect } from 'react'
import Link                     from 'next/link'
import { usePathname }          from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import type { SiteConfig }      from '@/types/content'
import { cn }                   from '@/lib/utils'

interface NavbarProps {
  config: SiteConfig
}

export function Navbar({ config }: NavbarProps) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navbarBg = scrolled || menuOpen
    ? 'bg-stone-950/95 backdrop-blur-md'
    : isHome
      ? 'bg-transparent'
      : 'bg-[#f8f7f5]/95 backdrop-blur-md border-b border-stone-200'

  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', navbarBg)}>
        <nav className="flex items-center justify-between px-8 md:px-16 h-16 md:h-20 max-w-screen-2xl mx-auto">

          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <span className="font-display text-2xl md:text-3xl tracking-wide3 text-stone-100">
              {config.studio.name}
            </span>
            <span className="block h-px w-0 group-hover:w-full bg-stone-100 transition-all duration-500 ease-expo" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {config.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative text-xs tracking-wide3 uppercase transition-colors duration-300 pb-0.5 group',
                    pathname === item.href ? 'text-stone-200' : 'text-stone-400 hover:text-stone-100'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute left-0 -bottom-px h-px bg-stone-300 transition-all duration-500 ease-expo',
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center gap-1.5"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block h-px bg-stone-200 w-full origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px bg-stone-200 w-full"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block h-px bg-stone-200 w-full origin-center"
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-stone-950 flex flex-col justify-center px-12"
          >
            <ul className="flex flex-col gap-6">
              {config.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'font-display text-5xl transition-colors duration-200',
                      pathname === item.href ? 'text-stone-300' : 'text-stone-100 hover:text-stone-400'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="absolute bottom-12 left-12 right-12 flex items-end justify-between"
            >
              <a
                href={`mailto:${config.contact.email}`}
                className="text-stone-600 font-mono text-xs hover:text-stone-300 transition-colors"
              >
                {config.contact.email}
              </a>
              <span className="text-stone-700 font-mono text-xs">
                Est. {config.studio.founded}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
