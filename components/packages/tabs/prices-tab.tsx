export function PackagePricesTab() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Pricing Information</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-border/40">
          <thead>
            <tr className="bg-[#f9f9f9] text-safari-ink">
              <th className="p-4 border-b border-r border-border/40">Season</th>
              <th className="p-4 border-b border-r border-border/40">Months</th>
              <th className="p-4 border-b border-border/40">Price (Per Person)</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/40">
              <td className="p-4 border-r border-border/40 font-medium text-safari-ink">High Season</td>
              <td className="p-4 border-r border-border/40">July - October</td>
              <td className="p-4 font-bold text-safari-green">$2,500</td>
            </tr>
            <tr className="border-b border-border/40">
              <td className="p-4 border-r border-border/40 font-medium text-safari-ink">Low Season</td>
              <td className="p-4 border-r border-border/40">April - May</td>
              <td className="p-4 font-bold text-safari-green">$1,800</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-border/40 font-medium text-safari-ink">Shoulder Season</td>
              <td className="p-4 border-r border-border/40">Jan - Mar, Nov - Dec</td>
              <td className="p-4 font-bold text-safari-green">$2,100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[13px] text-muted-foreground mt-4 italic">* Prices are subject to change based on group size and specific accommodation choices.</p>
    </div>
  )
}
