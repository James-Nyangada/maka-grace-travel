'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { FaqHero } from '@/components/faqs/faq-hero'
import { FaqAccordion } from '@/components/faqs/faq-accordion'
import { TailorCta } from '@/components/tailor-cta'

export default function FaqsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [topicFilter, setTopicFilter] = useState<string | null>(null)

  return (
    <>
      <SiteHeader />
      <main>
        <FaqHero onSearch={setSearchQuery} onTopicFilter={setTopicFilter} />
        <FaqAccordion searchQuery={searchQuery} topicFilter={topicFilter} />
        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
