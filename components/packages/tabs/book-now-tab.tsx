export function PackageBookNowTab() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-sans font-bold text-safari-ink mb-4">Book Your Safari</h2>
        <p className="text-muted-foreground">Fill out the form below and our safari experts will get back to you with a customized quote.</p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="First Name*" className="w-full border border-border/40 bg-[#f9f9f9] rounded-lg p-3 focus:outline-none focus:border-safari-green transition-colors" required />
          <input type="text" placeholder="Last Name*" className="w-full border border-border/40 bg-[#f9f9f9] rounded-lg p-3 focus:outline-none focus:border-safari-green transition-colors" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="email" placeholder="Email Address*" className="w-full border border-border/40 bg-[#f9f9f9] rounded-lg p-3 focus:outline-none focus:border-safari-green transition-colors" required />
          <input type="tel" placeholder="Phone Number" className="w-full border border-border/40 bg-[#f9f9f9] rounded-lg p-3 focus:outline-none focus:border-safari-green transition-colors" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="date" className="w-full border border-border/40 bg-[#f9f9f9] rounded-lg p-3 text-muted-foreground focus:outline-none focus:border-safari-green transition-colors" />
          <input type="number" placeholder="Number of Travelers*" min="1" className="w-full border border-border/40 bg-[#f9f9f9] rounded-lg p-3 focus:outline-none focus:border-safari-green transition-colors" required />
        </div>
        <textarea placeholder="Additional Requirements or Questions" rows={5} className="w-full border border-border/40 bg-[#f9f9f9] rounded-lg p-3 focus:outline-none focus:border-safari-green transition-colors resize-none"></textarea>
        <button type="button" className="w-full bg-[#0F4A33] hover:bg-[#0a3323] text-white font-bold py-4 rounded-full transition-colors uppercase tracking-wider text-sm">
          Submit Enquiry
        </button>
      </form>
    </div>
  )
}
