import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { TermsHero } from '@/components/terms/terms-hero'
import { TermsContent } from '@/components/terms/terms-content'

export const metadata = {
  title: 'Terms & Conditions - Uwanda Tours & Safaris',
  description:
    'Read the terms and conditions for booking safaris with Uwanda Tours & Safaris including cancellation policies, payments, and travel insurance.',
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <TermsHero />
        <TermsContent />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
