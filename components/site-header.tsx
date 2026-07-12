'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Mail, Phone, UserRound } from 'lucide-react'
import { TornEdge } from './torn-edge'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Safari Tours', href: '#safaris' },
  { label: 'Discover Tanzania', href: '#discover' },
  { label: 'Activities', href: '#activities' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '#contact' },
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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-40">
      {/* Top bar */}
      <div className="bg-safari-green text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
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
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="mailto:info@uwandatours.com" className="flex items-center gap-2 transition-opacity hover:opacity-75">
              <Mail className="h-4 w-4" />
              info@uwandatours.com
            </a>
            <a href="tel:+255762378870" className="flex items-center gap-2 transition-opacity hover:opacity-75">
              <Phone className="h-4 w-4" />
              +255 762 378 870
            </a>
            <span className="flex items-center gap-2">
              <UserRound className="h-4 w-4" />
              Dar Es Salaam, Tanzania
            </span>
          </div>
        </div>
      </div>
      {/* Torn edge between top bar and nav */}
      <div className="relative bg-white">
        <TornEdge fill="#166938" flip className="-mt-px" />
      </div>

      {/* Main nav */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-4 pt-1 lg:px-8">
          <Link href="#" className="flex items-center gap-2">
            <Image src="/images/uwanda-logo.png" alt="Uwanda Tours & Safaris logo" width={48} height={48} className="h-12 w-12 object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-widest text-safari-ink">UWANDA</span>
              <span className="text-[9px] font-semibold tracking-[0.2em] text-safari-gold">TOURS &amp; SAFARIS</span>
              <span className="text-[7px] font-medium tracking-[0.35em] text-safari-gold-light">LIMITED</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
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

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-12 w-12 flex-col items-end justify-center gap-1.5 rounded-lg bg-safari-green px-3"
          >
            <span className="h-0.5 w-6 rounded bg-white" />
            <span className="h-0.5 w-4 rounded bg-white" />
            <span className="h-0.5 w-6 rounded bg-white" />
          </button>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-white px-4 py-4 lg:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-bold text-safari-ink transition-colors hover:text-safari-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
