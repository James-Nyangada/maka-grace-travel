'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Package } from '@/lib/types'
import { BookingModal } from '@/components/booking/booking-modal'

export function PackagePriceOrQuote({ pkg }: { pkg: Package }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const hasPrice = pkg.priceFrom && pkg.priceFrom > 0

  return (
    <>
      <div className="mt-auto pt-5 flex items-center justify-between border-t border-border">
        {hasPrice ? (
          <>
            <p className="text-sm text-muted-foreground mt-5">
              Starting From <span className="text-lg font-bold text-safari-green">${pkg.priceFrom?.toLocaleString()} {pkg.priceFromKSH ? `| KSH ${pkg.priceFromKSH.toLocaleString()}` : ''}</span>
            </p>
            <Link href={`/packages/${pkg.slug}`} aria-label={`View ${pkg.name}`} className="group flex items-center text-safari-green mt-5">
              <span className="block h-px w-16 bg-safari-green transition-all group-hover:w-20" />
              <ArrowRight className="-ml-1 h-5 w-5" />
            </Link>
          </>
        ) : (
          <div className="flex items-center justify-between gap-4 w-full mt-5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-safari-green hover:bg-safari-green-dark text-white font-bold py-2.5 rounded-md transition-colors text-sm text-center"
            >
              Request Quotation
            </button>
            <Link href={`/packages/${pkg.slug}`} aria-label={`View ${pkg.name}`} className="group flex items-center text-safari-green shrink-0">
              <span className="block h-px w-12 bg-safari-green transition-all group-hover:w-16" />
              <ArrowRight className="-ml-1 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        packageData={pkg} 
      />
    </>
  )
}
