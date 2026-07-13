'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'

const popularTopics = ['Bookings', 'Wildlife', 'Accommodation', 'Health & Safety', 'Packing']

export function FaqHero({ onSearch, onTopicFilter }: { onSearch?: (query: string) => void; onTopicFilter?: (topic: string | null) => void }) {
  const [query, setQuery] = useState('')
  const [activeTopic, setActiveTopic] = useState<string | null>(null)

  const handleSearch = () => {
    onSearch?.(query)
  }

  const handleTopicClick = (topic: string) => {
    const next = activeTopic === topic ? null : topic
    setActiveTopic(next)
    onTopicFilter?.(next)
  }

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden min-h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/balloons-hero.png"
          alt="Hot air balloons over the Maasai Mara"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-10">
          Find answers to common questions about our safari adventures in Tanzania.
        </p>

        {/* Search Bar */}
        <div className="relative mx-auto max-w-2xl">
          <div className="flex items-center rounded-full bg-white shadow-lg ring-1 ring-border overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search For Safari Information..."
              className="flex-1 px-6 py-4 text-sm md:text-base bg-transparent outline-none text-safari-ink placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="flex items-center gap-2 bg-safari-green text-white px-6 md:px-8 py-4 text-sm font-bold transition-colors hover:bg-safari-green-dark"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-bold text-safari-ink">Popular Topics:</span>
          {popularTopics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => handleTopicClick(topic)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                activeTopic === topic
                  ? 'bg-safari-green text-white border-safari-green'
                  : 'bg-white text-safari-ink border-border hover:border-safari-green hover:text-safari-green'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
