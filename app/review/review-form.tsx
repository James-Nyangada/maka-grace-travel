'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import Link from 'next/link'

export function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    packageBooked: '',
    travelDate: '',
    rating: 5,
    review: ''
  })
  
  const [hoveredStar, setHoveredStar] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [packages, setPackages] = useState<any[]>([])

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const apiBaseUrl = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
        const res = await fetch(`${apiBaseUrl}/packages`);
        const data = await res.json();
        if (data.packages) {
          setPackages(data.packages);
        } else if (data.data) {
          setPackages(data.data);
        } else if (Array.isArray(data)) {
          setPackages(data);
        }
      } catch (err) {
        console.error('Failed to fetch packages:', err);
      }
    };
    fetchPackages();
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    
    try {
      const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const apiBaseUrl = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
      const response = await fetch(`${apiBaseUrl}/testimonials/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit review')
      }
      
      setSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="flex-1 bg-safari-cream py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
          <div className="text-center">
            <h1 className="font-script text-4xl text-safari-gold md:text-5xl">Share Your Experience</h1>
            <p className="mt-4 text-base text-muted-foreground">
              We'd love to hear about your safari adventure with Maka Grace Tours and Travel.
              Your feedback helps us create better experiences for future travellers!
            </p>
          </div>

          {success ? (
            <div className="mt-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-safari-green/10">
                <Star className="h-8 w-8 fill-safari-green text-safari-green" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-safari-ink">Thank you for your review!</h3>
              <p className="mt-2 text-muted-foreground">
                Your feedback has been submitted successfully. It will appear on our website once approved.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-safari-green px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-safari-green/90"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-safari-ink">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-safari-gold"
                    placeholder="e.g. Sarah & David M."
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-safari-ink">
                    Where are you from? <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-safari-gold"
                    placeholder="e.g. Berlin, Germany"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="packageBooked" className="text-sm font-medium text-safari-ink">
                    Which package did you book? (Optional)
                  </label>
                  <select
                    id="packageBooked"
                    name="packageBooked"
                    value={formData.packageBooked}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-safari-gold"
                  >
                    <option value="">None / Not listed</option>
                    {packages.map((pkg: any) => (
                      <option key={pkg._id} value={pkg.name || pkg.title}>
                        {pkg.name || pkg.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="travelDate" className="text-sm font-medium text-safari-ink">
                    When did you travel? <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="travelDate"
                    name="travelDate"
                    type="text"
                    required
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-safari-gold"
                    placeholder="e.g. March 2025"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-safari-ink">
                  How would you rate your experience? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2" onMouseLeave={() => setHoveredStar(0)}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormData({ ...formData, rating: star });
                      }}
                      onMouseEnter={() => setHoveredStar(star)}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-safari-gold"
                    >
                      <Star
                        className={`pointer-events-none h-8 w-8 transition-colors ${
                          star <= (hoveredStar || formData.rating)
                            ? 'fill-safari-gold text-safari-gold'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="review" className="text-sm font-medium text-safari-ink">
                  Your Review <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="review"
                  name="review"
                  required
                  rows={6}
                  value={formData.review}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-safari-gold"
                  placeholder="Tell us about your trip..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-safari-green px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-safari-green/90 disabled:opacity-70"
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
