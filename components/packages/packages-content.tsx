'use client'

import { useState, useMemo, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ArrowRight, ChevronRight, TreePine, Calendar, ChevronsRight, ChevronLeft, SlidersHorizontal, X, SearchX } from 'lucide-react'
import { Package } from '@/lib/types'
import { ImageCarousel } from '@/components/image-carousel'

/* ─────────────── helpers ─────────────── */

/** Extract numeric day count from duration strings like "3 Days / 2 Nights", "5 Days", "1-Day", etc. */
function parseDays(duration: string | undefined): number {
  if (!duration) return 0
  const match = duration.match(/(\d+)\s*[-–]?\s*[Dd]ay/i)
  return match ? parseInt(match[1], 10) : 0
}

const ITEMS_PER_PAGE = 10

/* ─────────────── component ─────────────── */

export function PackagesContent({ initialPackages = [] }: { initialPackages?: Package[] }) {

  /* ── derive dynamic filter options from package data ── */
  const destinations = useMemo(() => {
    const set = new Set<string>()
    initialPackages.forEach(p => { if (p.destination?.trim()) set.add(p.destination.trim()) })
    return Array.from(set).sort()
  }, [initialPackages])

  const categories = useMemo(() => {
    const set = new Set<string>()
    initialPackages.forEach(p => { if (p.category?.trim()) set.add(p.category.trim()) })
    return Array.from(set).sort()
  }, [initialPackages])

  const dayOptions = useMemo(() => {
    const set = new Set<number>()
    initialPackages.forEach(p => {
      const d = parseDays(p.duration)
      if (d > 0) set.add(d)
    })
    return Array.from(set).sort((a, b) => a - b)
  }, [initialPackages])

  const priceRange = useMemo(() => {
    const prices = initialPackages.map(p => p.priceFrom).filter(p => typeof p === 'number' && p > 0)
    if (prices.length === 0) return { min: 0, max: 5000 }
    return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) }
  }, [initialPackages])

  const searchParams = useSearchParams()
  const initDest = searchParams.get('destination') || 'all'
  const initCat = searchParams.get('category') || 'all'
  const initDays = searchParams.get('days') || 'all'

  /* ── filter state ── */
  const [selectedDestination, setSelectedDestination] = useState(initDest)
  const [selectedCategory, setSelectedCategory] = useState(initCat)
  const [selectedDays, setSelectedDays] = useState(initDays)
  const [priceMin, setPriceMin] = useState(priceRange.min)
  const [priceMax, setPriceMax] = useState(priceRange.max)
  const [sortBy, setSortBy] = useState('popular')
  const [currentPage, setCurrentPage] = useState(1)

  // "Applied" state — only updates when Apply is clicked
  const [appliedFilters, setAppliedFilters] = useState({
    destination: initDest,
    category: initCat,
    days: initDays,
    priceMin: priceRange.min,
    priceMax: priceRange.max,
  })

  const applyFilters = () => {
    setAppliedFilters({
      destination: selectedDestination,
      category: selectedCategory,
      days: selectedDays,
      priceMin,
      priceMax,
    })
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setSelectedDestination('all')
    setSelectedCategory('all')
    setSelectedDays('all')
    setPriceMin(priceRange.min)
    setPriceMax(priceRange.max)
    setAppliedFilters({
      destination: 'all',
      category: 'all',
      days: 'all',
      priceMin: priceRange.min,
      priceMax: priceRange.max,
    })
    setCurrentPage(1)
  }

  const hasActiveFilters = appliedFilters.destination !== 'all' ||
    appliedFilters.category !== 'all' ||
    appliedFilters.days !== 'all' ||
    appliedFilters.priceMin !== priceRange.min ||
    appliedFilters.priceMax !== priceRange.max

  /* ── filtered + sorted packages ── */
  const filteredPackages = useMemo(() => {
    let result = [...initialPackages]

    // Destination filter
    if (appliedFilters.destination !== 'all') {
      result = result.filter(p => p.destination?.trim() === appliedFilters.destination)
    }

    // Category filter
    if (appliedFilters.category !== 'all') {
      result = result.filter(p => p.category?.trim() === appliedFilters.category)
    }

    // Days filter
    if (appliedFilters.days !== 'all') {
      const targetDays = parseInt(appliedFilters.days, 10)
      result = result.filter(p => parseDays(p.duration) === targetDays)
    }

    // Price filter
    result = result.filter(p => {
      const price = p.priceFrom || 0
      return price >= appliedFilters.priceMin && price <= appliedFilters.priceMax
    })

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => (a.priceFrom || 0) - (b.priceFrom || 0))
        break
      case 'price-desc':
        result.sort((a, b) => (b.priceFrom || 0) - (a.priceFrom || 0))
        break
      case 'duration-asc':
        result.sort((a, b) => parseDays(a.duration) - parseDays(b.duration))
        break
      case 'popular':
      default:
        result.sort((a, b) => (b.views || 0) - (a.views || 0))
        break
    }

    return result
  }, [initialPackages, appliedFilters, sortBy])

  /* ── pagination ── */
  const totalPages = Math.max(1, Math.ceil(filteredPackages.length / ITEMS_PER_PAGE))
  const paginatedPackages = filteredPackages.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  const showingFrom = filteredPackages.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1
  const showingTo = Math.min(currentPage * ITEMS_PER_PAGE, filteredPackages.length)

  /* ── price slider handlers ── */
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value), priceMax - 50)
    setPriceMin(val)
  }
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value), priceMin + 50)
    setPriceMax(val)
  }

  // Percentage for the gradient fill on the slider track
  const minPercent = ((priceMin - priceRange.min) / (priceRange.max - priceRange.min)) * 100
  const maxPercent = ((priceMax - priceRange.min) / (priceRange.max - priceRange.min)) * 100

  /* ── mobile filter toggle ── */
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  /* ── filter panel (shared between desktop sidebar & mobile overlay) ── */
  const filterPanel = (
    <div className="space-y-6">
      {/* Destination */}
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-safari-green" />
          </div>
          <select
            value={selectedDestination}
            onChange={e => setSelectedDestination(e.target.value)}
            className="w-full appearance-none bg-white border border-border/60 rounded-md py-3 pl-10 pr-10 text-safari-ink focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-shadow cursor-pointer"
          >
            <option value="all">Destination: All</option>
            {destinations.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
          </div>
          <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-safari-ink">Destination</div>
        </div>
      </div>

      {/* Safari Comfort / Category */}
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <TreePine className="h-5 w-5 text-safari-green" />
          </div>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="w-full appearance-none bg-white border border-border/60 rounded-md py-3 pl-10 pr-10 text-safari-ink focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-shadow cursor-pointer"
          >
            <option value="all">Safari Comfort: All</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
          </div>
          <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-safari-ink">Safari Comfort</div>
        </div>
      </div>

      {/* Days */}
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-safari-green" />
          </div>
          <select
            value={selectedDays}
            onChange={e => setSelectedDays(e.target.value)}
            className="w-full appearance-none bg-white border border-border/60 rounded-md py-3 pl-10 pr-10 text-safari-ink focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-shadow cursor-pointer"
          >
            <option value="all">Days: All</option>
            {dayOptions.map(d => (
              <option key={d} value={String(d)}>{d} {d === 1 ? 'Day' : 'Days'}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
          </div>
          <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-safari-ink">Days</div>
        </div>
      </div>

      {/* Price Slider */}
      <div className="pt-4">
        <h4 className="font-bold text-safari-ink mb-4">Filter By Price</h4>
        <div className="relative w-full h-2 rounded-full bg-muted">
          {/* Active range track */}
          <div
            className="absolute top-0 h-full bg-safari-green rounded-full"
            style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
          />
          {/* Min thumb */}
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={50}
            value={priceMin}
            onChange={handleMinChange}
            className="absolute top-0 w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-safari-green [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-safari-green [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer"
            style={{ zIndex: priceMin > priceRange.max - 100 ? 5 : 3 }}
          />
          {/* Max thumb */}
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={50}
            value={priceMax}
            onChange={handleMaxChange}
            className="absolute top-0 w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-safari-green [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-safari-green [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer"
            style={{ zIndex: 4 }}
          />
        </div>
        <div className="mt-4 text-sm font-semibold text-safari-ink">
          Price: <span className="text-muted-foreground font-medium">${priceMin.toLocaleString()} — ${priceMax.toLocaleString()}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={applyFilters}
          className="flex-1 bg-safari-green text-white font-bold py-3 px-6 rounded-md hover:bg-safari-green-dark transition-colors text-sm"
        >
          Apply Filter
        </button>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="px-4 py-3 border border-border/60 rounded-md text-safari-ink hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors text-sm font-semibold"
            title="Reset filters"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )


  return (
    <section className="py-20 bg-safari-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filter — desktop */}
          <aside className="hidden lg:block w-full lg:w-1/4 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6 sticky top-28">
              <h3 className="text-xl font-bold text-safari-ink mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-safari-green rounded-full"></span>
                Search By Filter
              </h3>
              {filterPanel}
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMobileFilter(true)}
              className="w-full flex items-center justify-center gap-2 bg-white rounded-xl shadow-sm border border-border/40 p-4 font-bold text-safari-ink hover:border-safari-green transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5 text-safari-green" />
              Search By Filter
              {hasActiveFilters && (
                <span className="ml-1 w-2 h-2 rounded-full bg-safari-gold animate-pulse" />
              )}
            </button>
          </div>

          {/* Mobile filter overlay */}
          {showMobileFilter && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setShowMobileFilter(false)} />
              <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-safari-ink flex items-center gap-2">
                      <span className="w-1 h-5 bg-safari-green rounded-full"></span>
                      Search By Filter
                    </h3>
                    <button
                      onClick={() => setShowMobileFilter(false)}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  {filterPanel}
                  <button
                    onClick={() => { applyFilters(); setShowMobileFilter(false) }}
                    className="w-full mt-4 bg-safari-ink text-white font-bold py-3 rounded-md hover:bg-safari-ink/90 transition-colors text-sm"
                  >
                    View Results
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="w-full lg:w-3/4 flex flex-col">
            
            {/* Top Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-safari-ink font-semibold text-sm">
                {filteredPackages.length === 0 ? (
                  <span>No results found</span>
                ) : (
                  <>
                    Showing <span className="text-safari-gold">{showingFrom} - {showingTo}</span> of {filteredPackages.length} Result{filteredPackages.length !== 1 ? 's' : ''}
                  </>
                )}
              </p>
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={e => { setSortBy(e.target.value); setCurrentPage(1) }}
                  className="bg-transparent text-safari-ink font-semibold text-sm focus:outline-none cursor-pointer pr-6 appearance-none"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration-asc">Duration: Shortest</option>
                </select>
                <ChevronRight className="h-4 w-4 text-safari-ink rotate-90 -ml-5 pointer-events-none" />
              </div>
            </div>

            {/* No packages found */}
            {filteredPackages.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 rounded-full bg-safari-green/10 flex items-center justify-center mb-6">
                  <SearchX className="h-10 w-10 text-safari-green" />
                </div>
                <h3 className="text-2xl font-bold text-safari-ink mb-3">No Package Found for the Filter</h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  We couldn't find any packages matching your current filters. Try adjusting your criteria or reset the filters to see all available packages.
                </p>
                <button
                  onClick={resetFilters}
                  className="rounded-lg bg-safari-green px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-safari-green-dark"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Grid */}
            {filteredPackages.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {paginatedPackages.map((pkg) => (
                    <article key={pkg._id} className="bg-white rounded-xl shadow-sm border border-border/40 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                      <div className="relative h-64 w-full overflow-hidden rounded-t-xl bg-muted">
                        <div className="group-hover:scale-105 transition-transform duration-500 w-full h-full relative">
                          <ImageCarousel images={[pkg.imageUrl, ...(pkg.galleryUrls || [])]} altText={pkg.name} />
                        </div>
                        {pkg.status === 'on-offer' && (
                          <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 text-xs font-bold rounded-sm shadow-md z-10">
                            On offer
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col flex-grow p-6 pt-6 relative">
                        <div className="absolute -top-4 right-4 bg-white px-4 py-1.5 text-sm font-semibold text-safari-ink shadow-md rounded-sm border border-border/10 z-10">
                          {pkg.category}
                        </div>
                        <p className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                          <MapPin className="h-4 w-4 text-safari-green" />
                          {pkg.destination}
                        </p>
                        <h3 className="text-xl font-bold leading-tight text-safari-ink mb-4 hover:text-safari-green transition-colors cursor-pointer">
                          {pkg.name}
                        </h3>
                        
                        <ul className="space-y-2 mb-6">
                          {(pkg.inclusions || []).slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ChevronRight className="h-4 w-4 text-safari-green shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto pt-5 border-t border-border/50 flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            Starting From <span className="text-lg font-bold text-safari-green">${pkg.priceFrom?.toLocaleString()} {pkg.priceFromKSH ? `| KSH ${pkg.priceFromKSH.toLocaleString()}` : ''}</span>
                          </p>
                          <Link href={`/packages/${pkg.slug}`} aria-label={`View ${pkg.name}`} className="group/btn flex items-center text-safari-green">
                            <span className="block h-px w-12 bg-safari-green transition-all group-hover/btn:w-16" />
                            <ArrowRight className="-ml-1 h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-auto">
                    {/* Prev */}
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="w-10 h-10 rounded-full bg-white text-safari-ink hover:bg-safari-cream flex items-center justify-center shadow-sm border border-border/40 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                          currentPage === page
                            ? 'bg-safari-green text-white shadow-md'
                            : 'bg-white text-safari-ink hover:bg-safari-cream shadow-sm border border-border/40'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Next */}
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="w-10 h-10 rounded-full bg-white text-safari-ink hover:bg-safari-cream flex items-center justify-center shadow-sm border border-border/40 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ChevronsRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
