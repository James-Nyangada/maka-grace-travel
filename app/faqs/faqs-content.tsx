'use client'

import { useState } from 'react'
import { FaqHero } from '@/components/faqs/faq-hero'
import { FaqAccordion } from '@/components/faqs/faq-accordion'
import { TailorCta } from '@/components/tailor-cta'

export function FaqsContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [topicFilter, setTopicFilter] = useState<string | null>(null)

  return (
    <>
      <FaqHero onSearch={setSearchQuery} onTopicFilter={setTopicFilter} />
      <FaqAccordion searchQuery={searchQuery} topicFilter={topicFilter} />
      <TailorCta />
    </>
  )
}
