import { Star, ArrowRight } from 'lucide-react'

function TripAdvisorIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
      <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden="true">
        <circle cx="8" cy="13" r="3.4" fill="none" stroke="white" strokeWidth="1.4" />
        <circle cx="16" cy="13" r="3.4" fill="none" stroke="white" strokeWidth="1.4" />
        <circle cx="8" cy="13" r="1.4" />
        <circle cx="16" cy="13" r="1.4" />
        <path d="M4 9c2.5-2 5.5-3 8-3s5.5 1 8 3" fill="none" stroke="white" strokeWidth="1.4" />
      </svg>
    </span>
  )
}

function GoogleIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.7 2.9c2.3-2.1 3.7-5.1 3.7-8.6z" />
        <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.8-5l-3.9 3C3.3 21.3 7.3 24 12 24z" />
        <path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-3.9-3C.5 8.2 0 10 0 12s.5 3.8 1.3 5.4l3.9-3z" />
        <path fill="#EA4335" d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.6l3.9 3c.9-2.9 3.6-4.9 6.8-4.9z" />
      </svg>
    </span>
  )
}

function FacebookIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2]">
      <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4" aria-hidden="true">
        <path d="M13.5 22v-8.5h2.9l.4-3.3h-3.3V4.5c0-.95.3-1.6 1.6-1.6h1.7V.2c-.3 0-1.3-.2-2.4-.2-2.4 0-4 1.5-4 4.2v2.3H7.4v3.3h2.8V22h3.3z" />
      </svg>
    </span>
  )
}

const reviews = [
  {
    icon: <TripAdvisorIcon />,
    title: 'TripAdvisor Reviews',
    description:
      'Read the stories of our Maka Grace Tours and Travel travellers on TripAdvisor and get inspired for your own unforgettable safari adventure in Kenya.',
    rating: '5.0/5',
  },
  {
    icon: <GoogleIcon />,
    title: 'Google Experiences',
    description:
      'Discover what our travellers have to say about their safari experiences with Maka Grace Tours and Travel on Google Reviews. Let their stories inspire your African adventure.',
    rating: '5.0/5',
  },
  {
    icon: <FacebookIcon />,
    title: 'Facebook Ratings',
    description:
      'Explore reviews from our travellers on Facebook and see why Maka Grace Tours and Travel is a top choice for safari enthusiasts. Your dream safari starts here.',
    rating: '5.0/5',
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-script text-3xl text-safari-gold md:text-[32px]">Hear From Our Happy Travellers</p>
          <h2 className="mt-4 text-balance text-2xl font-bold text-safari-ink md:text-3xl">
            Click Below To Explore Real Reviews From Our Guests On Google, TripAdvisor, And More!
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.title} className="flex flex-col bg-safari-cream p-7">
              <h3 className="font-script text-2xl text-safari-ink">{review.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{review.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {review.icon}
                <span className="text-sm font-bold text-safari-ink">{review.rating}</span>
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-safari-gold text-safari-gold" />
                  ))}
                </span>
                <a href="/review" className="ml-auto flex items-center gap-1 text-sm font-semibold text-safari-green hover:underline">
                  Read all reviews
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/review" className="inline-flex items-center justify-center rounded-md bg-safari-green px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-safari-green/90">
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  )
}
