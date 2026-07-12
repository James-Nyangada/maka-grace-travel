import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { BlogHero } from '@/components/blogs/blog-hero'
import { BlogList } from '@/components/blogs/blog-list'
import { BlogSidebar } from '@/components/blogs/blog-sidebar'
import { TailorCta } from '@/components/tailor-cta'

export const metadata = {
  title: 'Our Insights - Uwanda Tours & Safaris',
  description: 'Read the latest travel tips, safari guides, and insights from Uwanda Tours & Safaris.',
}

export default function BlogsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <BlogHero 
          title="Our Insights" 
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blogs' }
          ]} 
          imageSrc="/images/placeholder-safari.jpg" 
        />
        
        <section className="py-20 bg-[#F9F9F9] min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
              <BlogList />
              <div>
                 <BlogSidebar showRelated={false} />
              </div>
            </div>
          </div>
        </section>

        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
