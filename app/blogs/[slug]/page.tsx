import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { BlogHero } from '@/components/blogs/blog-hero'
import { BlogDetail } from '@/components/blogs/blog-detail'
import { BlogSidebar } from '@/components/blogs/blog-sidebar'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${API}/api/blogs/slug/${slug}`);
    if (res.ok) {
      const blog = await res.json();
      return {
        title: `${blog.title} - Uwanda Tours & Safaris`,
      }
    }
  } catch (error) {}
  return {
    title: 'Blog - Uwanda Tours & Safaris',
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  let blog = null;
  
  try {
    const res = await fetch(`${API}/api/blogs/slug/${slug}`, { next: { revalidate: 60 } });
    if (res.ok) {
      blog = await res.json();
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!blog) {
    notFound();
  }

  const imageSrc = blog.thumbnailUrl || "/images/safari_lions.png";

  return (
    <>
      <SiteHeader />
      <main>
        <BlogHero 
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blogs', href: '/blogs' },
            { label: blog.title }
          ]} 
          imageSrc={imageSrc} 
        />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-16">
              <BlogDetail blog={blog} />
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

