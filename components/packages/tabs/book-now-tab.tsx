'use client'

import { Package } from '@/lib/types'
import { BookingForm } from '@/components/booking/booking-form'

export function PackageBookNowTab({ packageData }: { packageData: Package }) {
  return (
    <div className="animate-in fade-in duration-500">
      <BookingForm
        prefilledPackageName={packageData.name}
        packageId={packageData._id}
        embedded
      />
    </div>
  )
}
