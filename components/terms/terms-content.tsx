'use client'

import { useState, useEffect } from 'react'

const sidebarLinks = [
  { id: 'terms', label: 'Terms & Conditions' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'payment', label: 'Payment Options' },
]

const sections = [
  {
    id: 'booking-confirmation',
    number: 1,
    title: 'Booking Confirmation',
    content: (
      <p>
        A booking is confirmed once makagracetravel Tours &amp; Safaris receives a deposit and sends you a written confirmation
        email. By confirming a booking, you acknowledge that you have read and accepted these Terms &amp; Conditions on
        behalf of all travelers in your group.
      </p>
    ),
  },
  {
    id: 'payments',
    number: 2,
    title: 'Payments',
    content: (
      <>
        <p>
          A non-refundable deposit (typically 30% of the total tour cost) is required at the time of booking to secure your
          reservation. The balance must be settled no later than <strong>45 days prior to the tour start date</strong>.
          Bookings made within 45 days of departure must be paid in full immediately.
        </p>
        <p className="mt-4">
          Payments can be made via bank transfer, online payment link, or other approved methods. Bank charges are the
          responsibility of the client.
        </p>
      </>
    ),
  },
  {
    id: 'tour-modifications',
    number: 3,
    title: 'Tour Modifications & Changes',
    content: (
      <>
        <p>
          makagracetravel Tours &amp; Safaris reserves the right to modify itineraries, transport, or accommodation in the interest of
          client safety, comfort, or circumstances beyond our control. You will be notified promptly of any major changes
          and may choose to:
        </p>
        <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
          <li>Accept the revised arrangements,</li>
          <li>Book an alternative safari of similar value, or</li>
          <li>Cancel your booking with applicable compensation.</li>
        </ul>
        <p className="mt-4">
          Minor changes (e.g., timing adjustments or equivalent substitutions) do not qualify for compensation.
        </p>
        <p className="mt-4">
          No compensation is available for changes caused by force majeure events such as natural disasters, political
          unrest, or pandemics.
        </p>
      </>
    ),
  },
  {
    id: 'cancellation-traveler',
    number: 4,
    title: 'Cancellation By The Traveler',
    content: (
      <>
        <p>All cancellations must be made in writing via email. The following cancellation fees apply:</p>
        <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
          <li>
            <strong>60+ days before departure:</strong> Deposit forfeited
          </li>
          <li>
            <strong>30–59 days before departure:</strong> 50% of total cost
          </li>
          <li>
            <strong>15–29 days before departure:</strong> 75% of total cost
          </li>
          <li>
            <strong>Less than 15 days before departure:</strong> 100% of total cost (no refund)
          </li>
        </ul>
        <p className="mt-4">
          We strongly recommend purchasing comprehensive travel insurance to cover cancellation costs, medical emergencies,
          and trip interruptions.
        </p>
      </>
    ),
  },
  {
    id: 'travel-insurance',
    number: 5,
    title: 'Travel Insurance',
    content: (
      <p>
        It is mandatory for all travelers to have comprehensive travel insurance that covers medical expenses, emergency
        evacuation, trip cancellation, and personal belongings. makagracetravel Tours &amp; Safaris is not liable for any loss,
        damage, or injury not covered by insurance.
      </p>
    ),
  },
  {
    id: 'health-fitness',
    number: 6,
    title: 'Health & Fitness',
    content: (
      <>
        <p>
          Travelers are responsible for ensuring they are medically fit for the safari. You must inform us of any medical
          conditions, allergies, or dietary requirements at the time of booking.
        </p>
        <p className="mt-4">
          Vaccinations (e.g., Yellow Fever) and antimalarial medication are recommended. Please consult your physician
          before travel.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    number: 7,
    title: 'Liability',
    content: (
      <>
        <p>
          makagracetravel Tours &amp; Safaris acts as an agent for third-party service providers (hotels, airlines, transport
          companies, etc.) and is not liable for:
        </p>
        <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
          <li>Delays, cancellations, or changes by airlines or transport providers.</li>
          <li>Loss, theft, or damage to personal belongings.</li>
          <li>Injury, illness, or death caused by third-party negligence or natural hazards.</li>
        </ul>
        <p className="mt-4">
          Our liability is limited to the total cost of the tour paid by the client.
        </p>
      </>
    ),
  },
  {
    id: 'conduct',
    number: 8,
    title: 'Code Of Conduct',
    content: (
      <>
        <p>
          All travelers are expected to follow the instructions of their guides, respect wildlife, and adhere to national
          park regulations. makagracetravel Tours &amp; Safaris reserves the right to terminate the tour of any participant whose
          behavior is disruptive, dangerous, or unlawful.
        </p>
        <p className="mt-4">No refunds will be issued in such cases.</p>
      </>
    ),
  },
  {
    id: 'photography',
    number: 9,
    title: 'Photography & Media',
    content: (
      <p>
        By participating in a tour, you consent to the use of any photographs or videos taken during the tour for
        promotional and marketing purposes by makagracetravel Tours &amp; Safaris, unless otherwise requested in writing prior to the
        tour.
      </p>
    ),
  },
  {
    id: 'governing-law',
    number: 10,
    title: 'Governing Law',
    content: (
      <p>
        These Terms &amp; Conditions are governed by the laws of the United Republic of Tanzania. Any disputes arising from
        these terms shall be resolved under Tanzanian jurisdiction.
      </p>
    ),
  },
]

export function TermsContent() {
  const [activeLink, setActiveLink] = useState('terms')
  const [activeSection, setActiveSection] = useState('booking-confirmation')

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-28">
              <nav className="rounded-xl bg-white shadow-lg ring-1 ring-border overflow-hidden">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => setActiveLink(link.id)}
                    className={`flex w-full items-center gap-3 px-6 py-4 text-left text-sm font-semibold transition-colors ${
                      activeLink === link.id
                        ? 'text-safari-ink border-l-4 border-safari-green bg-safari-cream/50'
                        : 'text-muted-foreground hover:text-safari-ink hover:bg-safari-cream/30 border-l-4 border-transparent'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="mb-12 last:mb-0 scroll-mt-28"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-safari-ink mb-6">
                  {section.number}. {section.title}
                </h2>
                <div className="text-base leading-relaxed text-muted-foreground">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact note */}
            <div className="mt-16 rounded-xl bg-safari-cream p-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-safari-ink">Need Clarification?</strong> If you have any questions about our
                Terms &amp; Conditions, please don&apos;t hesitate to contact us at{' '}
                <a href="mailto:info@makagracetraveltours.com" className="text-safari-green font-semibold hover:underline">
                  info@makagracetraveltours.com
                </a>{' '}
                or call{' '}
                <a href="tel:+255762378870" className="text-safari-green font-semibold hover:underline">
                  +255 762 378 870
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
