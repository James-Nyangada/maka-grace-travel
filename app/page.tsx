import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustSection } from '@/components/trust-section'
import { AboutSection } from '@/components/about-section'
import { PackagesSection } from '@/components/packages-section'
import { ExperienceSection } from '@/components/experience-section'
import { DiscoverSection } from '@/components/discover-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ReviewsSection } from '@/components/reviews-section'
import { QuoteCta } from '@/components/quote-cta'
import { BlogSection } from '@/components/blog-section'
import { TailorCta } from '@/components/tailor-cta'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <PackagesSection />
        <ExperienceSection />
        <DiscoverSection />
        <TestimonialsSection />
        <ReviewsSection />
        <QuoteCta />
        <BlogSection />
        <TailorCta />
        <SiteFooter />
      </main>
      <FloatingWidgets />
    </>
  )
}
