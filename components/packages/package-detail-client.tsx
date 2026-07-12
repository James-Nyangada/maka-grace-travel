'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Plane } from 'lucide-react'

// Tabs
import { PackageOverviewTab } from './tabs/overview-tab'
import { PackageItineraryTab } from './tabs/itinerary-tab'
import { PackageGalleryTab } from './tabs/gallery-tab'
import { PackageActivitiesTab } from './tabs/activities-tab'
import { PackagePricesTab } from './tabs/prices-tab'
import { PackageBookNowTab } from './tabs/book-now-tab'

const TABS = ['Overview', 'Itinerary', 'Gallery', 'Activities', 'Prices', 'Book Now']

export function PackageDetailClient({ packageData }: { packageData: any }) {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <>
      {/* Hero Section with Tabs */}
      <section className="relative w-full overflow-hidden pt-20 flex flex-col">
        <div className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image
                src={packageData.image || "/images/placeholder-safari.jpg"}
                alt={packageData.title}
                fill
                className="object-cover object-center"
                priority
                referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-safari-green-dark/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-4">{packageData.title}</h1>
                <div className="flex items-center justify-center gap-2 text-lg">
                <Link href="/" className="text-safari-green hover:text-white transition-colors">Home</Link>
                <ChevronRight size={16} />
                <Link href="/packages" className="text-safari-green hover:text-white transition-colors">Packages</Link>
                <ChevronRight size={16} />
                <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{packageData.title}</span>
                </div>
            </div>
        </div>

        {/* The Tabs */}
        <div className="bg-white border-b border-border shadow-sm sticky top-20 z-40">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex overflow-x-auto hide-scrollbar">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap px-6 py-4 font-sans font-bold text-sm md:text-base uppercase tracking-wider border-b-2 transition-colors ${
                                activeTab === tab 
                                ? 'border-safari-green text-safari-green' 
                                : 'border-transparent text-safari-ink hover:text-safari-green'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="py-16 bg-[#F9F9F9] min-h-[50vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-border/40">
           {activeTab === 'Overview' && <PackageOverviewTab />}
           {activeTab === 'Itinerary' && <PackageItineraryTab />}
           {activeTab === 'Gallery' && <PackageGalleryTab />}
           {activeTab === 'Activities' && <PackageActivitiesTab />}
           {activeTab === 'Prices' && <PackagePricesTab />}
           {activeTab === 'Book Now' && <PackageBookNowTab />}
        </div>
      </div>
    </>
  )
}
