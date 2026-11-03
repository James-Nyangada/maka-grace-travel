'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Mail, Phone, UserRound, X } from 'lucide-react'
import { TornEdge } from './torn-edge'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Packages', href: '/packages' },
  { label: 'Discover Kenya', href: '/destinations' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8.5h2.9l.4-3.3h-3.3V4.5c0-.95.3-1.6 1.6-1.6h1.7V.2c-.3 0-1.3-.2-2.4-.2-2.4 0-4 1.5-4 4.2v2.3H7.4v3.3h2.8V22h3.3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.5-3.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19.2 5 12 5 12 5s-7.2 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C4.8 19 12 19 12 19s7.2 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0 0-4.5zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function NavContent({ setMenuOpen, isSticky }: { setMenuOpen: (val: boolean) => void; isSticky?: boolean }) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo-maka-icon.png" alt="Maka Grace Tours & Travel logo" width={64} height={64} className="h-16 w-16 object-contain -my-2" />
        <span className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-widest text-safari-ink">MAKA GRACE</span>
          <span className="text-[9px] font-semibold tracking-[0.2em] text-safari-gold">TOURS &amp; TRAVEL</span>
        </span>
      </Link>

      <nav aria-label={isSticky ? "Sticky navigation" : "Main navigation"} className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[15px] font-bold text-safari-ink transition-colors hover:text-safari-green"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Link href="/booking" className="hidden lg:flex items-center justify-center rounded-lg bg-safari-green px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
        Book Now
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        className="flex h-12 w-12 flex-col items-end justify-center gap-1.5 rounded-lg bg-safari-green px-3 lg:hidden"
      >
        <span className="h-0.5 w-6 rounded bg-white" aria-hidden="true" />
        <span className="h-0.5 w-4 rounded bg-white" aria-hidden="true" />
        <span className="h-0.5 w-6 rounded bg-white" aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </button>
    </div>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <header className="relative z-40">
        {/* Top bar */}
        <div className="bg-safari-green text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
            {/*
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-75">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-75">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-75">
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="X" className="transition-opacity hover:opacity-75">
                <XIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            */}
            <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
              <a href="mailto:info@makagracetravel.co.ke" className="flex items-center gap-2 transition-opacity hover:opacity-75">
                <Mail className="h-4 w-4" />
                info@makagracetravel.co.ke
              </a>
              <a href="tel:+254705794254" className="flex items-center gap-2 transition-opacity hover:opacity-75">
                <Phone className="h-4 w-4" />
                +254 705 794 254
              </a>
              <span className="flex items-center gap-2">
                <UserRound className="h-4 w-4" />
                Get In Touch, We're Available
              </span>
            </div>
          </div>
        </div>
        {/* Torn edge between top bar and nav */}
        <div className="relative bg-white">
          <TornEdge fill="#166938" flip className="-mt-px" />
        </div>

        {/* Main nav (Static) */}
        <div className="bg-white">
          <NavContent setMenuOpen={setMenuOpen} />
        </div>

        {/* Main nav (Fixed/Scrolled) - rendered only when scrolled to avoid duplicate landmarks & aria-hidden-focus */}
        {isScrolled && (
          <div 
            className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md transition-transform duration-500 ease-in-out translate-y-0"
          >
            <NavContent setMenuOpen={setMenuOpen} isSticky />
          </div>
        )}

        {/* Mobile Menu Drawer Overlay & Panel - rendered only when open */}
        {menuOpen && (
          <>
            <div 
              className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden opacity-100 pointer-events-auto"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <div 
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden translate-x-0"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-lg font-bold text-safari-ink">Menu</span>
                <button 
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-safari-ink" aria-hidden="true" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="p-4">
                <nav aria-label="Mobile navigation">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-lg font-bold text-safari-ink transition-colors hover:text-safari-green"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center justify-center rounded-lg bg-safari-green px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  )
}
