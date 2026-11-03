'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const apiBaseUrl = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
        const res = await fetch(`${apiBaseUrl}/testimonials`);
        const data = await res.json();
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
      }
    };
    fetchTestimonials();
  }, [])

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const activeTestimonial = testimonials[currentIndex] || {
    name: 'Sarah & David M.',
    location: 'Nairobi, Kenya',
    packageBooked: 'Maasai Mara Safari',
    travelDate: 'March 2025',
    rating: 5,
    review: "Maka Grace Tours and Travel turned our Kenya dream into reality. From the moment we enquired to the moment we landed back home, Marykala and her team handled every detail with professionalism and warmth. Our Maasai Mara safari was beyond anything we imagined. The guiding was exceptional, the lodge was stunning, and the personal touches made it feel like a trip built just for us. We will absolutely be back."
  };
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Faint dotted map background */}
      <div className="dots-pattern absolute right-0 top-0 h-72 w-1/2 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        {/* Polaroid collage */}
        <div className="relative mx-auto h-[360px] w-full max-w-md">
          {/* Blue plane doodle */}
          <svg
            className="absolute -left-2 bottom-6 h-16 w-20 text-sky-500"
            viewBox="0 0 80 60"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 42 L34 30 L20 18 L28 14 L48 26 L66 18 C70 16 74 20 71 24 L56 34 L60 52 L52 54 L42 40 L20 50 Z" opacity="0.85" />
          </svg>
          <div className="absolute left-8 top-6 w-64 rotate-[-8deg] bg-white p-3 pb-10 shadow-xl">
            <div className="relative h-48 w-full">
              <Image src="/images/testimonial1.webp" alt="Safari jeeps on the plains at sunset" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute left-24 top-16 w-64 rotate-[7deg] bg-white p-3 pb-10 shadow-xl">
            <div className="relative h-48 w-full">
              <Image src="/images/testimonial2.webp" alt="Giraffe beside a safari vehicle" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="relative overflow-hidden min-h-[400px]">
          <div key={currentIndex} className="relative animate-in slide-in-from-right-12 fade-in duration-700 fill-mode-both">
            <h2 className="text-2xl font-bold text-safari-ink md:text-[26px]">
              {activeTestimonial.rating === 5 ? 'Amazing, I Recommend A Million Times!!' : 'Great Experience!'}
            </h2>
            <div className="mt-3 flex gap-1" role="img" aria-label={`${activeTestimonial.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < activeTestimonial.rating ? 'fill-safari-gold text-safari-gold' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              &quot;{activeTestimonial.review}&quot;
            </p>
            <div className="mt-6 h-1 w-10 bg-safari-green" />
            <p className="mt-4 font-bold text-safari-ink">{activeTestimonial.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {activeTestimonial.location} &middot; {activeTestimonial.packageBooked && `${activeTestimonial.packageBooked}, `}{activeTestimonial.travelDate}
            </p>

            <div className="absolute right-0 top-20 hidden h-14 w-14 items-center justify-center bg-safari-cream lg:flex">
              <Quote className="h-7 w-7 fill-safari-green text-safari-green" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button 
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? Math.max(testimonials.length - 1, 0) : prev - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-safari-green transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Previous testimonial</span>
              </button>
              
              <div className="flex gap-1.5">
                {testimonials.length > 0 ? testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-safari-green' : 'w-2 bg-gray-200'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  >
                    <span className="sr-only">{`Go to testimonial ${idx + 1}`}</span>
                  </button>
                )) : (
                  <div className="h-2 w-6 rounded-full bg-safari-green" />
                )}
              </div>

              <button 
                type="button"
                onClick={() => setCurrentIndex((prev) => (testimonials.length > 0 ? (prev + 1) % testimonials.length : 0))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-safari-green transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Next testimonial</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
