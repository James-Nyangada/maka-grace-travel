import { Package } from '@/lib/types'

export function PackageOverviewTab({ packageData }: { packageData: Package }) {
  const highlights = (packageData.highlights && packageData.highlights.length > 0)
    ? packageData.highlights
    : (packageData.itinerary && packageData.itinerary.length > 0)
      ? packageData.itinerary.map(day => day.title || `Day ${day.dayNumber}`)
      : [
          `Destination: ${packageData.destination}`,
          `Duration: ${packageData.duration}`,
          `Category: ${packageData.category}`,
          `Group Size: ${packageData.groupSize}`
        ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Overview</h2>
      <p className="text-muted-foreground leading-relaxed text-[15px] whitespace-pre-wrap">
        {packageData.overview}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-[#f9f9f9] p-6 rounded-lg">
          <h3 className="font-sans font-bold text-safari-ink mb-2">Highlights</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-[14px]">
            {highlights.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-[#f9f9f9] p-6 rounded-lg border-l-4 border-safari-green">
          <h3 className="font-sans font-bold text-safari-ink mb-2">What's Included</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-[14px]">
            {(packageData.inclusions || []).map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f9f9f9] p-6 rounded-lg border-l-4 border-red-400">
          <h3 className="font-sans font-bold text-safari-ink mb-2">What's Not Included</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-[14px]">
            {(packageData.exclusions || []).map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
