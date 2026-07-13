import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

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

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Enquire Now', href: '/booking' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Services', href: '/services' },
]
const exploreLinks = [
  { label: 'Our Packages', href: '/packages' },
  { label: 'Discover Kenya', href: '/destinations' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Contact Us', href: '/contact' },
]
const paymentBadges = [
  { label: 'Visa', src: '/images/visa.svg' },
  { label: 'Mastercard', src: '/images/mastercard.svg' },
  { label: 'American Express', src: '/images/amex.svg' },
  { label: 'Maestro', src: '/images/maestro.svg' },
  { label: 'JCB', src: '/images/jcb.svg' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-safari-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <Image src="/logo-maka-icon.png" alt="Maka Grace Tours & Travel logo" width={56} height={56} className="h-14 w-14 object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-widest">MAKA GRACE</span>
              <span className="text-[8px] font-semibold tracking-[0.2em] text-safari-gold">TOURS &amp; TRAVEL</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            Explore the magic of Kenya with us and experience safaris that stay with you forever.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded bg-white/10 transition-colors hover:bg-white/20">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded bg-white/10 transition-colors hover:bg-white/20">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded bg-white/10 transition-colors hover:bg-white/20">
              <YoutubeIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X" className="flex h-8 w-8 items-center justify-center rounded bg-white/10 transition-colors hover:bg-white/20">
              <XIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-5 flex items-center gap-1.5">
            {paymentBadges.map((badge) => (
              <span
                key={badge.label}
                className="flex h-7 w-11 items-center justify-center rounded-sm bg-white p-0.5 shadow-sm border border-white/10"
              >
                <Image
                  src={badge.src}
                  alt={`${badge.label} logo`}
                  width={44}
                  height={28}
                  className="h-full w-full object-contain"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Company */}
        <nav aria-label="Company links">
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/85 transition-colors hover:text-safari-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Explore */}
        <nav aria-label="Explore links">
          <h3 className="text-lg font-bold">Explore</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/85 transition-colors hover:text-safari-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-5 flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-safari-gold" />
              <span>
                <span className="block text-xs text-white/70">Call Us (Mary Kala)</span>
                <a href="tel:+254705794254" className="text-sm font-bold hover:text-safari-gold">
                  +254 705 794 254
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-safari-gold" />
              <span>
                <span className="block text-xs text-white/70">Email Address</span>
                <a href="mailto:makagraceholdings@gmail.com" className="text-sm font-bold hover:text-safari-gold">
                  makagraceholdings@gmail.com
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-safari-gold" />
              <span>
                <span className="block text-xs text-white/70">Visit Office</span>
                <span className="text-sm font-bold">Nairobi, Kenya</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/80 md:flex-row lg:px-8">
          <p>
            <a href="/terms" className="hover:text-safari-gold">
              Terms &amp; Conditions
            </a>{' '}
            |{' '}
            <a href="#" className="hover:text-safari-gold">
              Privacy Policy
            </a>
          </p>
          <p>
            Copyright © 2026 <span className="text-safari-gold">Maka Grace Tours and Travel</span>. All Rights Reserved
          </p>
          <p>
            Designed by <span className="text-safari-gold">Afringe Limited</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
