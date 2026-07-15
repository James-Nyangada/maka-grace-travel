import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.makagracetours.com'
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'
const API_BASE_URL = rawApiUrl.endsWith('/api') ? rawApiUrl : `${rawApiUrl}/api`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/packages`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/destinations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/booking`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]

  try {
    // Fetch all active packages
    const packagesRes = await fetch(`${API_BASE_URL}/packages?limit=1000`, { next: { revalidate: 3600 } })
    if (packagesRes.ok) {
      const data = await packagesRes.json()
      const packages = Array.isArray(data) ? data : data.packages || []
      
      packages.forEach((pkg: any) => {
        if (pkg.slug) {
          routes.push({
            url: `${BASE_URL}/packages/${pkg.slug}`,
            lastModified: new Date(pkg.updatedAt || pkg.createdAt || new Date()),
            changeFrequency: 'weekly',
            priority: 0.8,
          })
        }
      })
    }
  } catch (error) {
    console.error('Error generating packages sitemap', error)
  }

  try {
    // Fetch all published blogs
    const blogsRes = await fetch(`${API_BASE_URL}/blog?limit=1000`, { next: { revalidate: 3600 } })
    if (blogsRes.ok) {
      const data = await blogsRes.json()
      const blogs = Array.isArray(data) ? data : data.blogs || []
      
      blogs.forEach((blog: any) => {
        if (blog.slug) {
          routes.push({
            url: `${BASE_URL}/blogs/${blog.slug}`,
            lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()),
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      })
    }
  } catch (error) {
    console.error('Error generating blogs sitemap', error)
  }

  return routes
}
