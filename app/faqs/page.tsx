import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { FaqsContent } from './faqs-content'
import { faqData } from '@/components/faqs/faq-accordion'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Maka Grace Tours and Travel',
  description: 'Find answers to frequently asked questions about our Kenya safari packages, bookings, accommodations, and more.',
  alternates: {
    canonical: '/faqs'
  }
}

export default function FaqsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <FaqsContent />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
