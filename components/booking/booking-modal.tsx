'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Package } from '@/lib/types'
import { BookingForm } from './booking-form'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  packageData: Package | null
}

export function BookingModal({ isOpen, onClose, packageData }: BookingModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null
  if (!isOpen || !packageData) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 right-0 z-20 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-border p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-safari-ink">
            Request Quote: {packageData.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-muted/50 hover:bg-muted text-safari-ink transition-colors"
            aria-label="Close booking modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-4 md:p-8 pt-4">
          <BookingForm
            prefilledPackageName={packageData.name}
            packageId={packageData._id}
            embedded
          />
        </div>
      </div>
    </div>
  )
}
