'use client'

import { useState, useEffect } from 'react'
import { CalendarRange, X, MessageSquare } from 'lucide-react'
import { BookingForm } from './booking-form'
import { createPortal } from 'react-dom'

export function FloatingBookingWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className="fixed bottom-6 left-6 z-[9000] flex flex-col items-start">
      {/* Widget Panel */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-3rem)] sm:w-[450px] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-safari-green p-4 flex items-center justify-between text-white shadow-md z-10 relative">
            <div>
              <h3 className="font-bold text-lg">Book a Safari</h3>
              <p className="text-sm opacity-90">We typically reply in minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close booking widget"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-safari-cream/30 p-2 sm:p-4">
            <BookingForm embedded />
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen
            ? 'bg-gray-800 text-white hover:bg-gray-700'
            : 'bg-safari-green text-white hover:bg-safari-green-dark'
        }`}
        aria-label="Open booking widget"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <CalendarRange className="h-6 w-6" />
            <span className="font-bold hidden sm:inline">Request Booking</span>
          </>
        )}
      </button>
    </div>,
    document.body
  )
}
