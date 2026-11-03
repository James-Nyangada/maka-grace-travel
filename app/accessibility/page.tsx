import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Plane, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'

export const metadata = {
  title: 'Accessibility Statement - makagracetravel Tours & Safaris',
  description:
    'Our commitment to digital accessibility for all travelers. Learn about our WCAG 2.2 Level AA compliance, assistive technology support, and how to contact us for accessibility assistance.',
}

export default function AccessibilityPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/beach-hero.png"
              alt="Serene African landscape at sunset"
              fill
              className="object-cover object-center"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="absolute left-10 lg:left-32 top-1/2 -translate-y-1/2 z-10 hidden md:block opacity-90">
            <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12" aria-hidden="true">
              <path d="M20 130 C 10 70, 80 20, 100 80 C 120 140, 180 50, 180 50" stroke="white" strokeWidth="2" strokeDasharray="6 6" fill="transparent"/>
            </svg>
            <Plane className="text-white absolute top-[25px] right-[10px] rotate-45" size={24} aria-hidden="true" />
          </div>

          <div className="relative z-10 text-center text-white px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans">Accessibility Statement</h1>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Link href="/" className="text-safari-gold-light hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={16} aria-hidden="true" />
              <span className="text-white font-medium">Accessibility Statement</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-safari-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-8 sm:p-12 space-y-10 text-safari-ink">
              
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-safari-gold mb-2">Our Commitment</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-safari-ink font-sans mb-4">
                  Accessible Travel Experiences for Everyone
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  At <strong>makagracetravel Tours &amp; Safaris</strong>, we believe the wonder of African travel and wildlife safaris should be accessible to everyone. We are dedicated to ensuring digital accessibility for people of all abilities, including people with visual, hearing, motor, and cognitive disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to our digital platforms.
                </p>
              </div>

              <div className="border-t border-border/60 pt-8">
                <h2 className="text-2xl font-bold text-safari-ink font-sans mb-4">
                  Conformance Status
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-safari-green underline font-medium hover:text-safari-green-dark">Web Content Accessibility Guidelines (WCAG)</a> define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                </p>
                <div className="bg-[#f9f9f9] border-l-4 border-safari-green p-5 rounded-r-lg">
                  <p className="text-safari-ink font-semibold">
                    The Maka Grace Tours &amp; Safaris website is conformant with WCAG 2.2 Level AA.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    All pages, interactive booking widgets, search filters, and media elements across the site are designed and regularly evaluated to meet or exceed Level AA requirements.
                  </p>
                </div>
              </div>

              <div className="border-t border-border/60 pt-8">
                <h2 className="text-2xl font-bold text-safari-ink font-sans mb-4">
                  Accessibility Measures Implemented
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We have taken the following technical and design measures to ensure full accessibility across our digital store:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-safari-green shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-safari-ink">High Contrast Ratios:</strong>{' '}
                      <span className="text-muted-foreground">All foreground text and interactive components maintain minimum contrast ratios of 4.5:1 against their backgrounds (and 3:1 for large text and graphical UI controls) to assist users with low vision or color vision deficiencies.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-safari-green shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-safari-ink">Full Keyboard Operability:</strong>{' '}
                      <span className="text-muted-foreground">All interactive elements—including safari booking requests, date selectors, FAQ accordions, filters, navigation menus, and media carousels—are completely navigable using only a keyboard.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-safari-green shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-safari-ink">Screen Reader Compatibility:</strong>{' '}
                      <span className="text-muted-foreground">All images have informative alternative text, dialogs maintain appropriate focus trapping and ARIA roles, form fields have programmatic labels and identifiers, and interactive controls provide clear status notifications.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-safari-green shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-safari-ink">Semantic Structure &amp; Landmarks:</strong>{' '}
                      <span className="text-muted-foreground">Every page is organized using semantic HTML5 landmarks (header, nav, main, aside, footer) and logical, unbroken heading hierarchies (H1 through H3) for intuitive screen reader navigation.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border/60 pt-8">
                <h2 className="text-2xl font-bold text-safari-ink font-sans mb-4">
                  Technical Specifications
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Accessibility of makagracetravel Tours &amp; Safaris relies on the following technologies to work with the particular combination of web browser and assistive technologies or plugins installed on your computer:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-center">
                  <div className="bg-[#f9f9f9] border border-border/40 p-3 rounded-lg font-semibold text-safari-ink">HTML5</div>
                  <div className="bg-[#f9f9f9] border border-border/40 p-3 rounded-lg font-semibold text-safari-ink">WAI-ARIA</div>
                  <div className="bg-[#f9f9f9] border border-border/40 p-3 rounded-lg font-semibold text-safari-ink">CSS3</div>
                  <div className="bg-[#f9f9f9] border border-border/40 p-3 rounded-lg font-semibold text-safari-ink">JavaScript</div>
                </div>
              </div>

              <div className="border-t border-border/60 pt-8">
                <h2 className="text-2xl font-bold text-safari-ink font-sans mb-4">
                  Feedback &amp; Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We welcome your feedback on the accessibility of makagracetravel Tours &amp; Safaris. If you encounter accessibility barriers, need assistance booking a safari, or have suggestions for improvement, please contact us:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#f9f9f9] p-6 rounded-xl border border-border/40">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-safari-green shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</div>
                      <a href="mailto:info@makagracetravel.co.ke" className="text-safari-ink font-medium hover:text-safari-green break-all">
                        info@makagracetravel.co.ke
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-safari-green shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Phone / WhatsApp</div>
                      <a href="tel:+254714138139" className="text-safari-ink font-medium hover:text-safari-green">
                        +254 714 138 139
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-safari-green shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</div>
                      <span className="text-safari-ink font-medium">Nairobi, Kenya &amp; Arusha, Tanzania</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  We try to respond to feedback within 2 business days.
                </p>
              </div>

              <div className="border-t border-border/60 pt-6 text-sm text-muted-foreground">
                <p>This statement was published on November 3, 2026, and is reviewed quarterly.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
