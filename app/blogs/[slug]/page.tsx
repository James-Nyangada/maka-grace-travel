import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { BlogHero } from '@/components/blogs/blog-hero'
import { BlogDetail } from '@/components/blogs/blog-detail'
import { BlogSidebar } from '@/components/blogs/blog-sidebar'

export const metadata = {
  title: 'How Much Does A Tanzania Safari Cost - Uwanda Tours & Safaris',
}

export default function BlogDetailPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <BlogHero 
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blogs', href: '/blogs' },
            { label: 'How Much Does a Tanzania Safari Cost' }
          ]} 
          imageSrc="/images/placeholder-safari.jpg" 
        />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-16">
              <BlogDetail />
              <div>
                 <div className="sticky top-32">
                    <BlogSidebar showRelated={true} />
                 </div>
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
