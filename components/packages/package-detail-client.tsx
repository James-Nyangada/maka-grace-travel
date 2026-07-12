'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Clock, User, MapPin, Info, Map, Image as ImageIcon, Flame, DollarSign, ShoppingCart, Check, X } from 'lucide-react'

// Mock data
const pkg = {
  title: '3-Day Flight Package Zanzibar To Nyerere Private',
  days: '3 Days',
  type: 'Private Tour',
  route: 'Zanzibar → Nyerere NP → Zanzibar',
  price: '$750',
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: Info },
  { id: 'itinerary', label: 'Itinerary', icon: MapPin },
  { id: 'gallery', label: 'Gallery', icon: ImageIcon },
  { id: 'activities', label: 'Activities', icon: Flame },
  { id: 'prices', label: 'Prices', icon: DollarSign },
  { id: 'book', label: 'Book Now', icon: ShoppingCart },
]

export function PackageDetailClient() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="bg-safari-cream">
      {/* Hero Header */}
      <div className="container mx-auto px-4 max-w-7xl pt-32 pb-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-safari-ink mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-safari-green"/> {pkg.days}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-safari-green"/> {pkg.type}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-safari-green"/> {pkg.route}</span>
            </div>
          </div>
          <div className="lg:text-right shrink-0">
            <p className="text-sm font-bold text-safari-ink mb-1">Starting from</p>
            <p className="text-3xl font-bold text-safari-gold">{pkg.price}</p>
          </div>
        </div>

        {/* Hero Images side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[300px] sm:h-[400px] mb-8">
          <div className="relative h-full w-full overflow-hidden">
            <Image src="/images/package-safari-truck.png" alt="Safari" fill className="object-cover" />
          </div>
          <div className="relative h-full w-full overflow-hidden hidden md:block">
            <Image src="/images/package-safari-truck.png" alt="Safari" fill className="object-cover" />
          </div>
        </div>

        {/* Tabs inside white pill */}
        <div className="flex justify-center -mt-14 relative z-20 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white rounded-[32px] p-2 shadow-xl border border-border/20 max-w-fit overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    isActive 
                      ? 'bg-safari-green text-white shadow-md' 
                      : 'text-safari-ink hover:bg-safari-cream'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-safari-green'}`} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 max-w-7xl pb-16">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'itinerary' && <ItineraryTab />}
        {activeTab === 'gallery' && <GalleryTab />}
        {activeTab === 'activities' && <ActivitiesTab />}
        {activeTab === 'prices' && <PricesTab />}
        {activeTab === 'book' && <BookNowTab />}
      </div>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h3 className="text-2xl font-bold text-safari-ink mb-4">Overview</h3>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Fly straight from Zanzibar to the heart of Tanzania's wild side with this 3-day private safari to Nyerere National Park (Selous). Enjoy a full safari experience including game drives, walking safaris, a boat safari, village and Maasai cultural tours – all with hotel pickup and drop-off for stress-free travel.
        </p>

        <h3 className="text-2xl font-bold text-safari-ink mb-6">Included/Excluded</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-safari-green shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">Park Fees</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-safari-green shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">All Taxes/VAT</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-safari-green shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">All activities (Unless labeled as optional)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-safari-green shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">All accommodation (Unless listed as upgrade)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-safari-green shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">A professional driver/guide</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-safari-green shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">All transportation (Unless labeled as optional)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-safari-green shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">Meals & Drinks (As specified in the day-by-day section)</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">International flights (From/to home)</span>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">Government imposed increase of taxes and/or park fees</span>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">Additional accommodation before and at the end of the tour</span>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">Tips (Tipping guideline US$10.00 pp per day)</span>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-safari-ink text-sm">Personal items (Souvenirs, travel insurance, visa fees, etc.)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Safaris */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-safari-green rounded-full"></div>
          <h3 className="text-xl font-bold text-safari-ink">Related Safaris</h3>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 group cursor-pointer border-b border-border/40 pb-4">
            <div className="relative w-28 h-20 rounded-md overflow-hidden shrink-0">
              <Image src="/images/package-safari-truck.png" alt="Related" fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-bold text-safari-ink leading-snug mb-1 group-hover:text-safari-green transition-colors">2-Day Flying Zanzibar To Nyerere National Park</h4>
              <p className="text-xs text-muted-foreground mt-1">Starting From <span className="text-safari-gold font-bold text-sm">$690</span></p>
            </div>
          </div>
          <div className="flex gap-4 group cursor-pointer border-b border-border/40 pb-4">
            <div className="relative w-28 h-20 rounded-md overflow-hidden shrink-0">
              <Image src="/images/package-plane.png" alt="Related" fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-bold text-safari-ink leading-snug mb-1 group-hover:text-safari-green transition-colors">1-Day Game Drive Safari Flying Zanzibar To Nyerere NP (Selous GR)</h4>
              <p className="text-xs text-muted-foreground mt-1">Starting From <span className="text-safari-gold font-bold text-sm">$450</span></p>
            </div>
          </div>
          <div className="flex gap-4 group cursor-pointer border-b border-border/40 pb-4">
            <div className="relative w-28 h-20 rounded-md overflow-hidden shrink-0">
              <Image src="/images/package-giraffe-jeep.png" alt="Related" fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-bold text-safari-ink leading-snug mb-1 group-hover:text-safari-green transition-colors">8-Day Amazing Safari Mikumi NP, Ruaha NP, Selous GR...</h4>
              <p className="text-xs text-muted-foreground mt-1">Starting From <span className="text-safari-gold font-bold text-sm">$1,969</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ItineraryTab() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Day 1 */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
        <div className="shrink-0">
          <div className="bg-safari-green text-white font-bold text-center py-5 px-3 rounded-md min-w-[80px] shadow-md sticky top-32">
            DAY 1
          </div>
        </div>
        <div className="flex-grow space-y-4">
          <h3 className="text-xl font-bold text-safari-ink">Hotel Pickup In Zanzibar - Fly To Selous - Game Drive Safari</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your safari begins with a morning hotel pickup in Zanzibar and transfer to the airport for your flight to Selous. Upon arrival, meet your private guide and start your adventure with a scenic game drive through the park. Spot elephants, lions, giraffes, zebras, and more while exploring different habitats. Enjoy a packed lunch during the drive and later head to your camp/lodge for dinner and overnight stay.
          </p>
          <div className="space-y-2 text-sm mt-4 bg-white p-4 rounded-md shadow-sm border border-border/20">
            <p><span className="font-bold text-safari-ink">Accommodation:</span> <span className="text-safari-gold font-medium">Selous Safari Lodge</span></p>
            <p><span className="font-bold text-safari-ink">Meals:</span> <span className="text-muted-foreground">Lunch, Dinner And Drinking Water</span></p>
            <p><span className="font-bold text-safari-ink">Park Name:</span> <span className="text-muted-foreground">Nyerere National Park</span></p>
          </div>
        </div>
        <div className="shrink-0 md:w-[300px] lg:w-[350px]">
          <div className="relative h-64 md:h-full min-h-[250px] w-full rounded-xl overflow-hidden shadow-md">
            <Image src="/placeholder.jpg" alt="Day 1" fill className="object-cover" />
          </div>
        </div>
      </div>
      
      {/* Day 2 */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
        <div className="shrink-0">
          <div className="bg-safari-green text-white font-bold text-center py-5 px-3 rounded-md min-w-[80px] shadow-md sticky top-32">
            DAY 2
          </div>
        </div>
        <div className="flex-grow space-y-4">
          <h3 className="text-xl font-bold text-safari-ink">Walking Safari, Village Visit & Rufiji Boat Safari</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Start the day with a guided walking safari led by an armed ranger, giving you a chance to see the wilderness up close. After breakfast, visit a nearby village to learn about local traditions and daily life. In the afternoon, enjoy a peaceful boat safari along the Rufiji River, where you may spot hippos, crocodiles, and a wide variety of birds. Return to the lodge for dinner and overnight.
          </p>
          <div className="space-y-2 text-sm mt-4 bg-white p-4 rounded-md shadow-sm border border-border/20">
            <p><span className="font-bold text-safari-ink">Accommodation:</span> <span className="text-safari-gold font-medium">Selous Safari Lodge</span></p>
            <p><span className="font-bold text-safari-ink">Meals:</span> <span className="text-muted-foreground">Breakfast, Lunch, Dinner And Drinking Water</span></p>
            <p><span className="font-bold text-safari-ink">Park Name:</span> <span className="text-muted-foreground">Nyerere National Park</span></p>
          </div>
        </div>
        <div className="shrink-0 md:w-[300px] lg:w-[350px]">
          <div className="relative h-64 md:h-full min-h-[250px] w-full rounded-xl overflow-hidden shadow-md">
            <Image src="/placeholder.jpg" alt="Day 2" fill className="object-cover" />
          </div>
        </div>
      </div>
      
      {/* Day 3 */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
        <div className="shrink-0">
          <div className="bg-safari-green text-white font-bold text-center py-5 px-3 rounded-md min-w-[80px] shadow-md sticky top-32">
            DAY 3
          </div>
        </div>
        <div className="flex-grow space-y-4">
          <h3 className="text-xl font-bold text-safari-ink">Maasai Culture Tour - Fly Back To Zanzibar - Hotel Drop-Off</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            After breakfast, take part in a guided tour of a local Maasai community and discover their rich culture and customs. Enjoy lunch and relax before your 4:00 PM flight back to Zanzibar. Upon arrival, you'll be met and transferred back to your hotel — ending your adventure with ease and comfort.
          </p>
          <div className="space-y-2 text-sm mt-4 bg-white p-4 rounded-md shadow-sm border border-border/20">
            <p><span className="font-bold text-safari-ink">Meals:</span> <span className="text-muted-foreground">Breakfast, Lunch And Drinking Water</span></p>
            <p><span className="font-bold text-safari-ink">Park Name:</span> <span className="text-muted-foreground">Nyerere National Park</span></p>
          </div>
        </div>
        <div className="shrink-0 md:w-[300px] lg:w-[350px] hidden md:block">
          {/* Empty spacer for alignment */}
        </div>
      </div>
    </div>
  )
}

function GalleryTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
        <Image src="/images/package-plane.png" alt="Gallery 1" fill className="object-cover" />
      </div>
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden md:col-span-2">
        <Image src="/images/package-safari-truck.png" alt="Gallery 2" fill className="object-cover" />
      </div>
      <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
        <Image src="/placeholder.jpg" alt="Gallery 3" fill className="object-cover" />
      </div>
      <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden md:col-span-2">
        <Image src="/images/package-giraffe-jeep.png" alt="Gallery 4" fill className="object-cover" />
      </div>
    </div>
  )
}

function ActivitiesTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-3 group cursor-pointer">
        <div className="relative h-56 rounded-xl overflow-hidden shadow-sm">
          <Image src="/placeholder.jpg" alt="Game Drive" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h4 className="text-center font-bold text-safari-ink group-hover:text-safari-green transition-colors">Game Drive</h4>
      </div>
      <div className="space-y-3 group cursor-pointer">
        <div className="relative h-56 rounded-xl overflow-hidden shadow-sm">
          <Image src="/placeholder.jpg" alt="Walking Safari" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h4 className="text-center font-bold text-safari-ink group-hover:text-safari-green transition-colors">Walking Safari</h4>
      </div>
      <div className="space-y-3 group cursor-pointer">
        <div className="relative h-56 rounded-xl overflow-hidden shadow-sm">
          <Image src="/placeholder.jpg" alt="Maasai Culture Tour" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h4 className="text-center font-bold text-safari-ink group-hover:text-safari-green transition-colors">Maasai Culture Tour</h4>
      </div>
      <div className="space-y-3 group cursor-pointer">
        <div className="relative h-56 rounded-xl overflow-hidden shadow-sm">
          <Image src="/placeholder.jpg" alt="Boat Safari" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h4 className="text-center font-bold text-safari-ink group-hover:text-safari-green transition-colors">Boat Safari</h4>
      </div>
      <div className="space-y-3 group cursor-pointer">
        <div className="relative h-56 rounded-xl overflow-hidden shadow-sm">
          <Image src="/placeholder.jpg" alt="Village Tour" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h4 className="text-center font-bold text-safari-ink group-hover:text-safari-green transition-colors">Village Tour</h4>
      </div>
    </div>
  )
}

function PricesTab() {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-border/40 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-safari-cream text-safari-ink font-bold">
            <tr>
              <th className="py-5 px-6 md:px-8 text-base">Season</th>
              <th className="py-5 px-6 md:px-8 text-base">Solo</th>
              <th className="py-5 px-6 md:px-8 text-base">2 PAX</th>
              <th className="py-5 px-6 md:px-8 text-base">4 PAX</th>
              <th className="py-5 px-6 md:px-8 text-base">6+ PAX</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 text-muted-foreground font-medium">
            <tr className="hover:bg-safari-cream/30 transition-colors">
              <td className="py-8 px-6 md:px-8 font-bold text-safari-gold text-lg">January To December</td>
              <td className="py-8 px-6 md:px-8 text-safari-ink">$1300</td>
              <td className="py-8 px-6 md:px-8 text-safari-ink">$750</td>
              <td className="py-8 px-6 md:px-8 text-safari-ink">$740</td>
              <td className="py-8 px-6 md:px-8 text-safari-ink">$720</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function BookNowTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-safari-green rounded-full"></div>
          <h3 className="text-xl font-bold text-safari-ink">Book This Tour Now</h3>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-safari-ink">Full Name *</label>
              <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-md border border-border/60 focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm transition-shadow" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-safari-ink">Country Name *</label>
              <input type="text" placeholder="Country of Residence" className="w-full px-4 py-3 rounded-md border border-border/60 focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm transition-shadow" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-safari-ink">Email Address *</label>
              <input type="email" placeholder="Enter your Email ID" className="w-full px-4 py-3 rounded-md border border-border/60 focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm transition-shadow" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-safari-ink">Phone Number *</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-md border border-border/60 focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm transition-shadow" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-safari-ink">Travel Date *</label>
            <div className="relative">
              <input type="date" className="w-full px-4 py-3 rounded-md border border-border/60 focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm text-muted-foreground transition-shadow appearance-none" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-safari-ink">Number of Travelers</label>
            <div className="space-y-3 max-w-sm">
              <div className="flex justify-between items-center bg-white border border-border/40 p-2 rounded-md">
                <span className="text-sm text-safari-ink font-medium pl-2">Adults (18+ years)</span>
                <select className="w-20 px-3 py-1.5 border border-border/60 rounded-md focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm cursor-pointer">
                  <option>1</option><option>2</option><option>3</option><option>4</option>
                </select>
              </div>
              <div className="flex justify-between items-center bg-white border border-border/40 p-2 rounded-md">
                <span className="text-sm text-safari-ink font-medium pl-2">Children (5-12 years)</span>
                <select className="w-20 px-3 py-1.5 border border-border/60 rounded-md focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm cursor-pointer">
                  <option>0</option><option>1</option><option>2</option>
                </select>
              </div>
              <div className="flex justify-between items-center bg-white border border-border/40 p-2 rounded-md">
                <span className="text-sm text-safari-ink font-medium pl-2">Kids (0-4 years)</span>
                <select className="w-20 px-3 py-1.5 border border-border/60 rounded-md focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm cursor-pointer">
                  <option>0</option><option>1</option><option>2</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-safari-ink">Message</label>
            <textarea rows={4} placeholder="Tell us more about your wishes" className="w-full px-4 py-3 rounded-md border border-border/60 focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green bg-white text-sm resize-none transition-shadow"></textarea>
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" id="terms" className="mt-1 rounded text-safari-green focus:ring-safari-green border-border/60 cursor-pointer" />
            <label htmlFor="terms" className="text-sm text-safari-ink cursor-pointer select-none">I agree to Terms & Conditions *</label>
          </div>

          <button type="button" className="w-full md:w-auto px-10 bg-safari-green text-white font-bold py-4 rounded-md hover:bg-safari-green-dark transition-colors tracking-wide">
            BOOK NOW
          </button>
        </form>
      </div>
      
      <div className="mt-8 lg:mt-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-safari-green rounded-full"></div>
          <h3 className="text-xl font-bold text-safari-ink">Book With Confidence</h3>
        </div>
        <div className="space-y-5 bg-white p-6 rounded-xl border border-border/40 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-safari-cream flex items-center justify-center shrink-0">
               <User className="w-5 h-5 text-safari-green"/>
            </div>
            <span className="text-safari-ink text-sm font-semibold">Customer care available 24/7</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-safari-cream flex items-center justify-center shrink-0">
               <Check className="w-5 h-5 text-safari-green"/>
            </div>
            <span className="text-safari-ink text-sm font-semibold">Hand-picked Tours & Activities</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-safari-cream flex items-center justify-center shrink-0">
               <Clock className="w-5 h-5 text-safari-green"/>
            </div>
            <span className="text-safari-ink text-sm font-semibold">Professional Driver/Guide</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-safari-cream flex items-center justify-center shrink-0">
               <DollarSign className="w-5 h-5 text-safari-green"/>
            </div>
            <span className="text-safari-ink text-sm font-semibold">No-hassle best price guarantee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
