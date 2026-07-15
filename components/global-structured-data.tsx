import Script from 'next/script'

export async function GlobalStructuredData() {
  let settings = null;
  try {
    const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    const apiUrl = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
    const res = await fetch(`${apiUrl}/settings`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      settings = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch settings for structured data:", error);
  }

  const officeLocation = settings?.officeLocation || "Nairobi, Kenya";
  const phoneNumber = settings?.phoneNumber || "+254 705 794 254";
  const emailAddress = settings?.emailAddress || "makagraceholdings@gmail.com";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://www.makagracetours.com/#organization",
        "name": "Maka Grace Tours and Travel",
        "url": "https://www.makagracetours.com",
        "logo": "https://www.makagracetours.com/logo-maka-icon.png",
        "image": "https://www.makagracetours.com/logo-maka-icon.png",
        "description": "Discover the magic of Kenya with Maka Grace Tours and Travel. We offer expert-guided safaris, custom itineraries, and unforgettable adventures.",
        "telephone": phoneNumber,
        "email": emailAddress,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": officeLocation.split(',')[0].trim(),
          "addressCountry": officeLocation.includes(',') ? officeLocation.split(',')[1].trim() : "Kenya"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.makagracetours.com/#localbusiness",
        "name": "Maka Grace Tours and Travel",
        "url": "https://www.makagracetours.com",
        "telephone": phoneNumber,
        "email": emailAddress,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": officeLocation.split(',')[0].trim(),
          "addressCountry": officeLocation.includes(',') ? officeLocation.split(',')[1].trim() : "Kenya"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "21:00"
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="global-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
