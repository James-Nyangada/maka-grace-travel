import { Package } from '@/lib/types'

export function PackagePricesTab({ packageData }: { packageData: Package }) {
  const { pricing, currency = 'USD' } = packageData;

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Pricing Information</h2>
      
      {(!pricing || pricing.length === 0) ? (
        <div className="p-6 bg-[#f9f9f9] border border-border/40 rounded-lg text-center text-muted-foreground">
          <p>Pricing information is not currently available for this package.</p>
          {packageData.priceFrom ? (
             <p className="mt-2">Prices start from <span className="font-bold text-safari-green">{formatPrice(packageData.priceFrom)}</span></p>
          ) : null}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-border/40">
            <thead>
              <tr className="bg-[#f9f9f9] text-safari-ink">
                <th className="p-4 border-b border-r border-border/40">Season / Category</th>
                <th className="p-4 border-b border-border/40">Price (Per Person)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {pricing.map((item, index) => (
                <tr key={index} className="border-b border-border/40">
                  <td className="p-4 border-r border-border/40 font-medium text-safari-ink">{item.title}</td>
                  <td className="p-4 font-bold text-safari-green">{formatPrice(item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <p className="text-[13px] text-muted-foreground mt-4 italic">* Prices are subject to change based on group size and specific accommodation choices.</p>
    </div>
  )
}
