import Image from 'next/image'
import { Calendar } from 'lucide-react'

export function BlogDetail() {
  return (
    <article className="space-y-8">
      {/* Featured Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-lg overflow-hidden">
        <Image src="/images/placeholder-safari.jpg" alt="Safari Guide" fill className="object-cover" />
      </div>

      <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
        <Calendar className="w-4 h-4 text-safari-green" />
        <span>02 May, 2025</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-safari-ink leading-tight">
        How Much Does A Tanzania Safari Cost
      </h1>

      <div className="prose prose-lg max-w-none text-muted-foreground font-body text-[15px] leading-relaxed space-y-6">
        <p>
          Tanzania is often described as the ultimate safari destination—and for good reason. From the endless plains of the Serengeti to the majestic Ngorongoro Crater and the elephant-rich Tarangire, the country delivers unforgettable wildlife experiences.
        </p>
        <p>
          But how much does it actually cost to go on safari in Tanzania?
        </p>
        <p>
          The truth is, there's no one-size-fits-all answer. Tanzania safaris come in a wide variety of styles, ranging from simple camping adventures to ultra-luxurious getaways. The price depends on a number of factors: your travel style, length of stay, time of year, the parks you visit, and whether you're traveling solo or with others.
        </p>
        <p>
          Here's a breakdown of everything you need to know about Tanzania safari pricing—so you can plan with confidence, avoid unexpected costs, and get the best value for your money.
        </p>

        <h2 className="text-[32px] font-sans font-bold text-safari-ink mt-12 mb-8 pt-8 border-t border-border/40">
          1. What Affects The Cost Of A Tanzania Safari?
        </h2>

        {/* Section A */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🗓️</span>
            <h3 className="text-2xl font-sans font-bold text-safari-ink m-0">A) Number Of Days On Safari</h3>
          </div>
          <p>
            Naturally, the longer your safari, the more it will cost. Most travelers choose 5 to 7 days, which allows you to visit multiple parks without feeling rushed. However, even a 3-day safari can be rewarding if planned well.
          </p>
        </div>

        {/* Section B */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">👥</span>
            <h3 className="text-2xl font-sans font-bold text-safari-ink m-0">B) Group Size</h3>
          </div>
          <p>Solo Travelers: Expect to pay more unless you join a group tour.</p>
          <p>Couples or Families: Shared costs reduce the per-person rate.</p>
          <p>Group Tours: The cheapest option, but comes with limited customization and flexibility.</p>
        </div>

        {/* Section C */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🛏️</span>
            <h3 className="text-2xl font-sans font-bold text-safari-ink m-0">C) Type Of Accommodation</h3>
          </div>
          <p className="mb-6">Accommodation is often the single biggest factor affecting your safari cost. Here's how they compare:</p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-sm md:text-[15px]">
              <thead>
                <tr className="border-b border-border/40 text-safari-ink font-semibold">
                  <th className="py-4 px-4 font-body">Accommodation Type</th>
                  <th className="py-4 px-4 font-body">Description</th>
                  <th className="py-4 px-4 font-body">Price Range (Per Person/Night)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-muted-foreground">
                <tr>
                  <td className="py-4 px-4 text-safari-ink">Camping</td>
                  <td className="py-4 px-4">Public campsites, tents, shared facilities</td>
                  <td className="py-4 px-4">$30 - $150</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-safari-ink">Budget Lodges</td>
                  <td className="py-4 px-4">Simple, clean rooms, often outside parks</td>
                  <td className="py-4 px-4">$100 - $200</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-safari-ink">Mid-Range Lodges</td>
                  <td className="py-4 px-4">Comfortable, with en-suite bathrooms</td>
                  <td className="py-4 px-4">$200 - $400</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-safari-ink">Luxury Camps/Lodges</td>
                  <td className="py-4 px-4">Gourmet dining, spacious rooms, premium service</td>
                  <td className="py-4 px-4">$500 - $1,500+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[15px] p-4 rounded-md mt-4">
            ⛺ <span className="font-bold text-safari-ink">Pro Tip:</span> Staying inside the national park is more expensive, but you'll save time on transfers and get better wildlife viewing opportunities.
          </p>
        </div>

        {/* Section D */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚙</span>
            <h3 className="text-2xl font-sans font-bold text-safari-ink m-0">D) Transport Method</h3>
          </div>
          <p>
            Driving Safaris: Most common. You travel between parks in a 4x4 vehicle with a guide. It's economical and scenic.
          </p>
          <p>
            Fly-in Safaris: Great for luxury safaris or remote areas like the Serengeti. Faster but significantly more expensive.
          </p>
        </div>

        {/* Section E */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌦️</span>
            <h3 className="text-2xl font-sans font-bold text-safari-ink m-0">E) Seasonal Differences</h3>
          </div>
          <p className="mb-6">Tanzania has three main seasons that impact cost:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm md:text-[15px]">
              <thead>
                <tr className="border-b border-border/40 text-safari-ink font-semibold">
                  <th className="py-4 px-4 font-body">Season</th>
                  <th className="py-4 px-4 font-body">Months</th>
                  <th className="py-4 px-4 font-body">Safari Cost Impact</th>
                  <th className="py-4 px-4 font-body">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-muted-foreground">
                <tr>
                  <td className="py-4 px-4 text-safari-ink">High (Dry) Season</td>
                  <td className="py-4 px-4">June - October</td>
                  <td className="py-4 px-4">Highest prices</td>
                  <td className="py-4 px-4">Best wildlife viewing, Great Migration</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-safari-ink">Low (Rainy) Season</td>
                  <td className="py-4 px-4">March - May</td>
                  <td className="py-4 px-4">Cheapest prices</td>
                  <td className="py-4 px-4">Fewer crowds, lush scenery</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-safari-ink">Shoulder Season</td>
                  <td className="py-4 px-4">Nov, Jan - Feb</td>
                  <td className="py-4 px-4">Moderate prices</td>
                  <td className="py-4 px-4">Good balance between cost and wildlife</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-[32px] font-sans font-bold text-safari-ink mt-12 mb-8 border-t border-border/40 pt-12">
          2. Tanzania Safari Cost By Budget
        </h2>
        <p>
          Tanzania can be experienced on a variety of budgets, from thrifty adventures to over-the-top indulgence.
        </p>

      </div>
    </article>
  )
}
