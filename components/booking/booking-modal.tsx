'use client'

import { useState, useEffect } from 'react'
import { X, Calendar, Users, Mail, Phone, User, MessageSquare } from 'lucide-react'
import { Package } from '@/lib/types'
import { api } from '@/lib/api'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  packageData: Package | null
}

export function BookingModal({ isOpen, onClose, packageData }: BookingModalProps) {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDateFrom: '',
    travelDateTo: '',
    adults: '2',
    children: '0',
    additionalNotes: ''
  })

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setSuccess(false)
      setError(null)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        travelDateFrom: '',
        travelDateTo: '',
        adults: '2',
        children: '0',
        additionalNotes: ''
      })
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null
  if (!isOpen || !packageData) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // We can use the booking endpoint since this is for a specific package quote
      await api.bookings.create({
        ...formData,
        packageId: packageData._id,
        packageName: packageData.name,
        adults: parseInt(formData.adults) || 2,
        children: parseInt(formData.children) || 0,
        nationality: 'N/A', // Default values for required fields in Booking schema
        country: 'N/A',
        accommodationPref: 'midrange',
        agreedToTerms: true
      })
      
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Failed to submit request. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        
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
        <div className="p-4 md:p-8 pt-6">
          {success ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-safari-ink mb-4">Quote Request Sent!</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Thank you for your interest in {packageData.name}. Our team will review your details and get back to you with a personalized quote shortly.
              </p>
              <button
                onClick={onClose}
                className="bg-safari-green text-white font-bold py-3 px-8 rounded-md hover:bg-safari-green-dark transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-safari-ink border-b pb-2">Contact Details</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-safari-ink mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-safari-ink mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-safari-ink mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-safari-ink border-b pb-2">Trip Preferences</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-safari-ink mb-1">From Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          type="date"
                          name="travelDateFrom"
                          value={formData.travelDateFrom}
                          onChange={handleChange}
                          className="w-full pl-10 pr-2 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-safari-ink mb-1">To Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          type="date"
                          name="travelDateTo"
                          value={formData.travelDateTo}
                          onChange={handleChange}
                          className="w-full pl-10 pr-2 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-safari-ink mb-1">Adults</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="number"
                          min="1"
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-safari-ink mb-1">Children</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="number"
                          min="0"
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-safari-ink mb-1">Additional Notes</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <textarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:border-safari-green focus:ring-1 focus:ring-safari-green outline-none transition-colors resize-none"
                        placeholder="Any special requests or requirements..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-safari-green hover:bg-safari-green-dark text-white font-bold py-3 px-8 rounded-md transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? 'Submitting...' : 'Request Quote'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
