export async function ContactCards() {
  let settings = null;
  try {
    const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    const apiUrl = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
    const res = await fetch(`${apiUrl}/settings`, {
      next: { revalidate: 60 } // Revalidate every minute
    });
    if (res.ok) {
      settings = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch contact settings:", error);
  }

  const officeLocation = settings?.officeLocation || "Nairobi, Kenya\n(office coming soon)";
  const contactPerson = settings?.contactPerson || "Mary Kala";
  const phoneNumber = settings?.phoneNumber || "+254 705 794 254";
  const emailAddress = settings?.emailAddress || "makagraceholdings@gmail.com";
  const workingHours = settings?.workingHours || "Monday – Sunday\n8:00 AM – 9:00 PM EAT";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="sr-only">Our Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Office Location */}
          <div className="flex flex-col items-center text-center p-10 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 text-safari-green-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <path d="M9 10l3-2 3 2v3h-6v-3z" />
                <path d="M12 8l-4 3" />
                <path d="M12 8l4 3" />
              </svg>
            </div>
            <h3 className="text-[22px] font-sans font-bold text-safari-green-dark mb-4">Office Location</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {officeLocation.split('\n').map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  {i < officeLocation.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-center text-center p-10 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 text-safari-green-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                 <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                 <path d="M14.05 6A5 5 0 0 1 18 10" />
              </svg>
            </div>
            <h3 className="text-[22px] font-sans font-bold text-safari-green-dark mb-4">Phone Number</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              <span className="font-medium text-gray-700 block mb-1">{contactPerson}</span>
              <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="hover:text-safari-green transition-colors">{phoneNumber}</a>
            </p>
          </div>

          {/* Mail Address */}
          <div className="flex flex-col items-center text-center p-10 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 text-safari-green-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                 <path d="M22 6l-10 7L2 6" />
                 <path d="M8 10v-4h8v4" />
                 <line x1="10" y1="8" x2="14" y2="8" />
              </svg>
            </div>
            <h3 className="text-[22px] font-sans font-bold text-safari-green-dark mb-4">Mail Address</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              <a href={`mailto:${emailAddress}`} className="hover:text-safari-green transition-colors">{emailAddress}</a>
            </p>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center text-center p-10 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 text-safari-green-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-[22px] font-sans font-bold text-safari-green-dark mb-4">Working Hours</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {workingHours.split('\n').map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  {i < workingHours.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
