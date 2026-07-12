import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactCards } from '@/components/contact/contact-cards'
import { ContactForm } from '@/components/contact/contact-form'
import { TailorCta } from '@/components/tailor-cta'

export const metadata = {
  title: 'Contact Us - Uwanda Tours & Safaris',
  description: 'Get in touch with Uwanda Tours & Safaris for any inquiries or booking requests.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <ContactCards />
        <ContactForm />
        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
