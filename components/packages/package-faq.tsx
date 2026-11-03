'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "1. When Is The Best Time To Visit Tanzania?",
    answer: "Tanzania is a year-round destination, but the best time to visit depends on what you want to experience:\n\n• June to October (Dry Season):\nBest for Wildlife Viewing: This is the peak safari season. The dry weather makes animals easier to spot as they gather around water sources. Great Migration (Northern Serengeti): July to September is ideal for witnessing the famous river crossings.\n\n• November to March (Green Season):\nLush Landscapes & Bird Watching: The scenery is vibrant, and it's an excellent time for birding. Calving Season (Southern Serengeti): January to March offers a chance to see thousands of wildebeest calves born on the plains.\n\n• April & May (Long Rains):\nThis is the off-season due to heavier rainfall, but it's also when lodges offer discounted rates.\n\nmakagracetravel Tours & Safaris offers tailored itineraries for each season so you can experience the best of Tanzania year-round."
  },
  {
    question: "2. What Can I Expect From A Safari In Tanzania With makagracetravel Tours & Safaris?",
    answer: "You can expect professional service, highly experienced guides, comfortable accommodations tailored to your budget, and well-maintained 4x4 safari vehicles. We handle all logistics—from airport transfers to park fees—so you can focus on enjoying the wildlife and stunning landscapes."
  },
  {
    question: "3. How Can I Personalize My Tanzania Trip With Your Services?",
    answer: "We offer 100% tailor-made itineraries. Simply contact us with your preferences, budget, group size, and must-see destinations, and our expert team will craft a unique safari experience perfectly suited for you."
  },
  {
    question: "4. Can I See The Big Five In Tanzania?",
    answer: "Yes! Tanzania is one of the best places in the world to see the Big Five (lion, leopard, elephant, buffalo, and rhino), particularly in the Serengeti and Ngorongoro Crater."
  },
  {
    question: "5. Is It Safe To Travel To Tanzania?",
    answer: "Tanzania is generally very safe for tourists. As with any travel destination, we recommend taking standard precautions, but our guides are trained to ensure your safety throughout the entire safari experience."
  }
]

export function PackageFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-20 bg-safari-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="sr-only">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-md shadow-sm overflow-hidden border border-border/40 relative group">
              <h3>
                <button 
                  type="button"
                  id={`pkg-faq-header-${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`pkg-faq-content-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="font-bold text-safari-gold text-lg md:text-xl">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-safari-green shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-safari-ink shrink-0" aria-hidden="true" />
                  )}
                </button>
              </h3>
              {openIndex === index && (
                <div 
                  id={`pkg-faq-content-${index}`}
                  role="region"
                  aria-labelledby={`pkg-faq-header-${index}`}
                  className="px-6 pb-6 pt-2 text-muted-foreground text-sm leading-relaxed relative"
                >
                   <div className="whitespace-pre-line text-safari-ink/80">{faq.answer}</div>
                   {/* Green triangle at bottom right */}
                   <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-b-[32px] border-b-safari-green" aria-hidden="true"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
