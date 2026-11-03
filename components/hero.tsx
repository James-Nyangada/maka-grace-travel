'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Check, MapPin, Clock3, Search, ChevronDown } from 'lucide-react'

const features = ['Expert Local Guides', 'Tailored Safari Experiences', 'Sustainable & Ethical Tourism']

const heroImages = [
  '/images/safari_elephants.png',
  '/images/safari_lions.png',
  '/images/safari_sunset.png',
]

export function Hero() {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [destination, setDestination] = useState('all')
  const [category, setCategory] = useState('all')
  const [days, setDays] = useState('all')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (destination !== 'all') params.set('destination', destination)
    if (category !== 'all') params.set('category', category)
    if (days !== 'all') params.set('days', days)
    
    router.push(`/packages?${params.toString()}`)
  }

  return (
    <section className="relative min-h-[640px] overflow-hidden lg:min-h-[720px]" aria-label="Hero">
      {/* Background Carousel */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt="Safari scene in Kenya"
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col items-center justify-center px-4 pb-48 pt-24 text-center lg:min-h-[720px] lg:px-8">
        {/* Dotted plane doodle */}
        <svg
          className="pointer-events-none absolute left-[16%] top-[38%] hidden h-28 w-36 text-white/80 lg:block"
          viewBox="0 0 140 110"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 100 C 5 70, 25 45, 55 55 C 80 63, 90 40, 105 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M112 8 l6 10 12 2 -10 6 -1 12 -9 -8 -12 3 5 -11 -7 -10 12 3 z"
            fill="currentColor"
            transform="scale(0.8) translate(28, 2)"
          />
        </svg>

        <p className="font-script text-3xl text-safari-gold-light md:text-4xl">Personalised Travel Experiences Across Kenya</p>
        <h1 className="mt-4 text-5xl font-bold text-white md:text-7xl">
          <span className="font-script font-normal text-safari-gold-light">Kenya</span> Awaits
        </h1>

        <ul className="mt-12 flex flex-col items-center gap-4 md:flex-row md:gap-10">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <Check className="h-3.5 w-3.5 text-safari-green" strokeWidth={3} />
              </span>
              <span className="text-base font-bold text-white md:text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Search bar */}
      <div className="absolute inset-x-4 bottom-8 z-10 mx-auto max-w-5xl lg:inset-x-8">
        <form
          className="flex flex-col gap-2 rounded-md bg-white p-4 shadow-2xl md:flex-row md:items-stretch md:gap-0 md:p-5"
          onSubmit={handleSearch}
          aria-label="Search safaris"
        >
          <div className="relative flex flex-1 items-center border-border px-3 py-2 md:border-r">
            <div className="flex items-center gap-3 w-full">
              <MapPin className="h-5 w-5 shrink-0 text-safari-green" />
              <div className="flex flex-col w-full relative pr-4">
                <label htmlFor="hero-destination" className="text-base font-bold text-safari-ink">Destination</label>
                <select 
                  id="hero-destination"
                  aria-label="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-sm text-muted-foreground bg-transparent focus:outline-none appearance-none cursor-pointer outline-none"
                >
                  <option value="all">Where would you like to go?</option>
                  <option value="Amboseli">Amboseli</option>
                  <option value="Lake Nakuru">Lake Nakuru</option>
                  <option value="Masai Mara">Masai Mara</option>
                  <option value="Samburu">Samburu</option>
                  <option value="Tsavo">Tsavo</option>
                </select>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-safari-ink pointer-events-none absolute right-3" />
          </div>
          <div className="relative flex flex-1 items-center border-border px-3 py-2 md:border-r">
            <div className="flex items-center gap-3 w-full">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 shrink-0 text-safari-green" aria-hidden="true">
                <path d="M3 17h18M5 17V9a2 2 0 012-2h6a2 2 0 012 2v8M15 11h4a2 2 0 012 2v4M7 17v2M17 17v2" />
              </svg>
              <div className="flex flex-col w-full relative pr-4">
                <label htmlFor="hero-comfort" className="text-base font-bold text-safari-ink">Safari Comfort</label>
                <select
                  id="hero-comfort"
                  aria-label="Safari Comfort"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-sm text-muted-foreground bg-transparent focus:outline-none appearance-none cursor-pointer outline-none"
                >
                  <option value="all">Budget / Mid-range / Luxury</option>
                  <option value="Budget">Budget</option>
                  <option value="Mid-range">Mid-range</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-safari-ink pointer-events-none absolute right-3" />
          </div>
          <div className="relative flex flex-1 items-center px-3 py-2">
            <div className="flex items-center gap-3 w-full">
              <Clock3 className="h-5 w-5 shrink-0 text-safari-green" />
              <div className="flex flex-col w-full relative pr-4">
                <label htmlFor="hero-days" className="text-base font-bold text-safari-ink">Days</label>
                <select
                  id="hero-days"
                  aria-label="Days"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full text-sm text-muted-foreground bg-transparent focus:outline-none appearance-none cursor-pointer outline-none"
                >
                  <option value="all">How many days?</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                  <option value="6">6 Days</option>
                  <option value="7">7 Days</option>
                  <option value="8">8 Days</option>
                  <option value="9">9 Days</option>
                  <option value="10">10 Days</option>
                  <option value="11">11 Days</option>
                  <option value="12">12 Days</option>
                  <option value="13">13 Days</option>
                  <option value="14">14 Days</option>
                </select>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-safari-ink pointer-events-none absolute right-3" />
          </div>
          <button
            type="submit"
            className="ml-0 flex items-center justify-center gap-2 rounded-md bg-safari-green px-10 py-4 text-base font-bold text-white transition-colors hover:bg-safari-green-dark md:ml-4"
          >
            <Search className="h-4 w-4" />
            Search Packages
          </button>
        </form>
      </div>
    </section>
  )
}
