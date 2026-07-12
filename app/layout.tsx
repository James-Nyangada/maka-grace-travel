
import type { Metadata, Viewport } from 'next'
import { Quicksand, Grand_Hotel } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'],
})

const grandHotel = Grand_Hotel({
  subsets: ['latin'],
  variable: '--font-grand-hotel',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Uwanda Tours & Safaris | Unforgettable Tanzania Safari Adventures',
  description:
    'Explore Tanzania&apos;s breathtaking landscapes, diverse wildlife, and vibrant culture with Uwanda Tours And Safaris. Expert guides, customized itineraries, sustainable travel.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#166938',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${quicksand.variable} ${grandHotel.variable}`}>
      <body className="font-sans antialiased">
        {children}
        
      </body>
    </html>
  )
}

