import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { BookingHero } from '@/components/booking/booking-hero'
import { BookingForm } from '@/components/booking/booking-form'

export const metadata = {
  title: 'Book Your Safari - makagracetravel Tours & Safaris',
  description:
    'Book your dream Tanzania safari adventure with makagracetravel Tours & Safaris. Fill in your details and our expert planners will craft the perfect itinerary for you.',
}

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <BookingHero />
        <BookingForm />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
