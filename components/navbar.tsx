'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const getLinkClasses = (href: string) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'
    if (isActive(href)) {
      return `${baseClasses} text-white dark:text-white font-bold bg-red-600/30 dark:bg-red-600/30 border border-red-500 dark:border-red-500`
    }
    return `${baseClasses} text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800`
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex gap-2 group font-bold text-xl">
            <span className="text-slate-900 dark:text-slate-100 group-hover:text-red-500 transition-colors">
              Saring
            </span>
            <span className="text-slate-900 dark:text-slate-100 group-hover:text-red-500 transition-colors">sebelum </span>
            <span className="text-red-500 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Sharing</span>
          </Link>

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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-white dark:bg-slate-900 transition-colors">
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
