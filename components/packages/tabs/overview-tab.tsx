export function PackageOverviewTab() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Overview</h2>
      <p className="text-muted-foreground leading-relaxed text-[15px]">
        Experience the ultimate safari adventure in Tanzania. This package offers an unparalleled opportunity to witness the Great Migration, explore the endless plains of the Serengeti, and marvel at the Ngorongoro Crater, a UNESCO World Heritage site.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-[#f9f9f9] p-6 rounded-lg">
          <h3 className="font-sans font-bold text-safari-ink mb-2">Highlights</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-[14px]">
            <li>Witness the Great Wildebeest Migration</li>
            <li>Explore the Serengeti National Park</li>
            <li>Descend into the Ngorongoro Crater</li>
            <li>Encounter the Big Five</li>
          </ul>
        </div>
        <div className="bg-[#f9f9f9] p-6 rounded-lg">
          <h3 className="font-sans font-bold text-safari-ink mb-2">What's Included</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-[14px]">
            <li>Accommodation and meals</li>
            <li>Professional safari guide</li>
            <li>4x4 safari vehicle</li>
            <li>Park fees and taxes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
