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
      const title = `${blog.title} | Maka Grace Tours and Travel`;
      const description = blog.excerpt || blog.content?.substring(0, 150) || 'Read the latest updates and stories from Maka Grace Tours and Travel.';
      const ogImage = blog.thumbnailUrl || '/logo-maka-icon.png';
      return {
        title,
        description,
        alternates: {
          canonical: `/blogs/${slug}`,
        },
        openGraph: {
          title,
          description,
          url: `https://www.makagracetours.com/blogs/${slug}`,
          type: 'article',
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          images: [ogImage],
        },
      }
    }
  } catch (error) {}
  return {
    title: 'Blog | Maka Grace Tours and Travel',
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

  const schema = blog ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": [
      blog.thumbnailUrl || "https://www.makagracetours.com/logo-maka-icon.png"
    ],
    "datePublished": blog.createdAt || new Date().toISOString(),
    "dateModified": blog.updatedAt || blog.createdAt || new Date().toISOString(),
    "author": [{
      "@type": "Person",
      "name": blog.author?.name || "Maka Grace Tours and Travel"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Maka Grace Tours and Travel",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.makagracetours.com/logo-maka-icon.png"
      }
    }
  } : null;

  return (
    <>
      <SiteHeader />
      <main>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
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

