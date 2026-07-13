
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
  title: 'Maka Grace Tours and Travel | Premier Kenya Safaris & Holidays',
  description:
    'Discover the magic of Kenya with Maka Grace Tours and Travel. We offer expert-guided safaris, custom itineraries, and unforgettable adventures across the Maasai Mara, Amboseli, and beyond.',
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

