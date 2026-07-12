'use client'

import { useEffect, useState } from 'react'
import { Check, MapPin, Clock3, Search, ChevronDown } from 'lucide-react'

const words = ['Tours', 'Adventures', 'Experiences']

function useTypewriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) {
            setTimeout(() => setDeleting(true), 1600)
          }
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setWordIndex((i) => (i + 1) % words.length)
          }
        }
      },
      deleting ? 70 : 140,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex])

  return text
}

const features = ['Expert Local Guides', 'Tailored Safari Experiences', 'Sustainable & Ethical Tourism']

export function Hero() {
  const typed = useTypewriter()

  return (
    <section className="relative min-h-[640px] overflow-hidden lg:min-h-[720px]" aria-label="Hero">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-giraffe.png')" }}
        role="img"
        aria-label="Giraffe standing beside an acacia tree with green mountains behind"
      />
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

        <p className="font-script text-3xl text-safari-gold-light md:text-4xl">Unforgettable Safari Adventures</p>
        <h1 className="mt-4 text-5xl font-bold text-white md:text-7xl">
          Safari{' '}
          <span className="font-script font-normal text-safari-gold-light">
            {typed}
            <span className="typing-caret ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] bg-white align-baseline" />
          </span>
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
          onSubmit={(e) => e.preventDefault()}
          aria-label="Search safaris"
        >
          <div className="flex flex-1 items-center justify-between gap-3 border-border px-3 py-2 md:border-r">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-safari-green" />
              <div className="text-left">
                <p className="text-base font-bold text-safari-ink">Destination</p>
                <p className="text-sm text-muted-foreground">All Parks</p>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-safari-ink" />
          </div>
          <div className="flex flex-1 items-center justify-between gap-3 border-border px-3 py-2 md:border-r">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 shrink-0 text-safari-green" aria-hidden="true">
                <path d="M3 17h18M5 17V9a2 2 0 012-2h6a2 2 0 012 2v8M15 11h4a2 2 0 012 2v4M7 17v2M17 17v2" />
              </svg>
              <div className="text-left">
                <p className="text-base font-bold text-safari-ink">Safari Comfort</p>
                <p className="text-sm text-muted-foreground">All</p>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-safari-ink" />
          </div>
          <div className="flex flex-1 items-center justify-between gap-3 px-3 py-2">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 shrink-0 text-safari-green" />
              <div className="text-left">
                <p className="text-base font-bold text-safari-ink">Days</p>
                <p className="text-sm text-muted-foreground">All</p>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-safari-ink" />
          </div>
          <button
            type="submit"
            className="ml-0 flex items-center justify-center gap-2 rounded-md bg-safari-green px-10 py-4 text-base font-bold text-white transition-colors hover:bg-safari-green-dark md:ml-4"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
