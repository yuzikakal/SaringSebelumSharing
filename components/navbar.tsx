'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Fenomena', href: '/fenomena' },
  { label: 'Nilai Pancasila', href: '/nilai-pancasila' },
  { label: 'Cek Hoaks', href: '/cek-hoaks' },
  { label: 'Kesimpulan', href: '/kesimpulan' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const getLinkClasses = (href: string) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'

    if (isActive(href)) {
      // Light: Teks merah gelap, bg merah pucat. Dark: Teks merah terang, bg gelap.
      return `${baseClasses} text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-950 font-semibold`
    }

    return `${baseClasses} text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800`
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 group font-bold text-xl tracking-tight">
            <span className="text-slate-900 dark:text-slate-100 transition-colors">
              Saring Sebelum
            </span>
            <span className="text-red-600 dark:text-red-500 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
              Sharing
            </span>
          </Link>

          <div className="flex flex-row">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getLinkClasses(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block ${getLinkClasses(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}