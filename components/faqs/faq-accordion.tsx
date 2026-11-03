'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { type FaqItem, faqData } from '@/lib/faq-data'

function FaqCard({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="relative rounded-lg border border-border bg-white overflow-hidden transition-shadow hover:shadow-md">
      {/* Green corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12">
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M48 0 L48 48 L0 48 Z" fill="#166938" />
        </svg>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-bold text-safari-gold pr-8">{item.question}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-safari-ink/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export function FaqAccordion({
  searchQuery,
  topicFilter,
}: {
  searchQuery?: string
  topicFilter?: string | null
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTopic = !topicFilter || item.category === topicFilter
    return matchesSearch && matchesTopic
  })

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {filteredFaqs.map((item, index) => (
            <FaqCard
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No questions found matching your search. Try a different term.</p>
          </div>
        )}
      </div>
    </section>
  )
}
