'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Phòng', href: '/rooms' },
  { label: 'Soluna Café', href: '/cafe' },
  { label: 'Trải Nghiệm', href: '/experience' },
  { label: 'Về Chúng Tôi', href: '/about' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-soluna-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-soluna px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start leading-none group">
            <span
              className={cn(
                'font-heading text-2xl tracking-widest transition-colors',
                isScrolled ? 'text-soluna-green' : 'text-soluna-white'
              )}
            >
              SOLUNA
            </span>
            <span
              className={cn(
                'font-body text-[9px] tracking-widest-xl uppercase transition-colors mt-0.5',
                isScrolled ? 'text-soluna-oak' : 'text-soluna-gold'
              )}
            >
              — DALAT HOTEL —
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-body text-xs tracking-widest uppercase transition-colors',
                  isScrolled
                    ? 'text-soluna-charcoal hover:text-soluna-green'
                    : 'text-soluna-white/80 hover:text-soluna-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className={cn(
                'font-body text-xs tracking-widest uppercase px-6 py-3 border transition-colors',
                isScrolled
                  ? 'border-soluna-green text-soluna-green hover:bg-soluna-green hover:text-soluna-white'
                  : 'border-soluna-white text-soluna-white hover:bg-soluna-white hover:text-soluna-green'
              )}
            >
              Book Ngay
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className={cn(
              'md:hidden p-2 transition-colors',
              isScrolled ? 'text-soluna-green' : 'text-soluna-white'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-soluna-cream border-t border-soluna-oak/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs tracking-widest uppercase text-soluna-charcoal py-2 border-b border-soluna-oak/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="btn-primary mt-2 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Ngay
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
