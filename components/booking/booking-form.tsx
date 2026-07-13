'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  User,
  MapPin,
  CalendarDays,
  Users,
  Bed,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Check,
  Sparkles,
  Send,
  Globe,
  Phone,
  Mail,
  Loader2,
} from 'lucide-react'

/* ─────────────────────────── data ─────────────────────────── */

const packages = [
  '3-Day Flight Package Zanzibar to Nyerere Private',
  '2-Day Flying Zanzibar to Nyerere National Park',
  '1-Day Game Drive Safari Flying Zanzibar To Nyerere NP (Selous GR)',
  '8-Day Amazing Safari Mikumi NP, Ruaha NP, Selous GR (Nyerere NP)',
  '2-Day Zanzibar to Serengeti by Flight + 2 Game Drive',
  '3-Day Flight Package Zanzibar to Serengeti National Park',
  'Custom / Tailor-Made Safari',
]

const hearAboutOptions = ['Google', 'Social Media', 'Referral', 'Travel Blog', 'TripAdvisor', 'Other']

/* ─────────────────────── step config ──────────────────────── */

const steps = [
  { id: 1, label: 'Personal Info', icon: User, short: 'You' },
  { id: 2, label: 'Trip Details', icon: MapPin, short: 'Trip' },
  { id: 3, label: 'Travelers', icon: Users, short: 'Group' },
  { id: 4, label: 'Preferences', icon: Bed, short: 'Stay' },
  { id: 5, label: 'Final Details', icon: MessageSquare, short: 'Notes' },
]

/* ────────────────────── helper types ──────────────────────── */

interface FormState {
  fullName: string
  email: string
  phone: string
  nationality: string
  country: string
  packageInterest: string
  dateFrom: string
  dateTo: string
  adults: number
  children: number
  childrenAges: string
  accommodation: 'budget' | 'mid-range' | 'luxury' | ''
  specialRequests: string
  hearAbout: string
  additionalComments: string
  agreeTerms: boolean
}

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  nationality: '',
  country: '',
  packageInterest: '',
  dateFrom: '',
  dateTo: '',
  adults: 1,
  children: 0,
  childrenAges: '',
  accommodation: '',
  specialRequests: '',
  hearAbout: '',
  additionalComments: '',
  agreeTerms: false,
}

/* ───────────────── reusable field wrappers ─────────────────── */

function FieldGroup({ label, required, children, hint }: { label: string; required?: boolean; children: React.ReactNode; hint?: string }) {
  return (
    <div className="group">
      <label className="block text-sm font-bold text-safari-ink mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

const inputCls =
  'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-safari-ink outline-none transition-all placeholder:text-muted-foreground/60 focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 hover:border-safari-gold/50'
const selectCls = `${inputCls} appearance-none cursor-pointer`

/* ════════════════════════ MAIN COMPONENT ═══════════════════ */

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const formRef = useRef<HTMLDivElement>(null)

  /* ── helpers ── */

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validateStep = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (step === 1) {
      if (!form.fullName.trim()) e.fullName = 'Full name is required'
      if (!form.email.trim()) e.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
      if (!form.phone.trim()) e.phone = 'Phone number is required'
      if (!form.nationality.trim()) e.nationality = 'Nationality is required'
      if (!form.country.trim()) e.country = 'Country of residence is required'
    }
    if (step === 2) {
      if (!form.packageInterest) e.packageInterest = 'Select a package'
      if (!form.dateFrom) e.dateFrom = 'Start date is required'
      if (!form.dateTo) e.dateTo = 'End date is required'
      else if (form.dateFrom && form.dateTo && form.dateTo < form.dateFrom) e.dateTo = 'End date must be after start date'
    }
    if (step === 3) {
      if (form.adults < 1) e.adults = 'At least 1 adult required'
    }
    if (step === 4) {
      if (!form.accommodation) e.accommodation = 'Please choose a preference'
    }
    if (step === 5) {
      if (!form.agreeTerms) e.agreeTerms = 'You must agree to the Terms & Conditions'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => {
    if (!validateStep()) return
    setDirection('forward')
    setStep((s) => Math.min(s + 1, 5))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const prev = () => {
    setDirection('backward')
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = () => {
    if (!validateStep()) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  /* ─────────── progress bar ─────────── */

  const progress = ((step - 1) / (steps.length - 1)) * 100

  /* ─────────── success state ─────────── */

  if (submitted) {
    return (
      <section className="bg-safari-cream py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-safari-green/10 animate-in zoom-in duration-500">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-safari-green animate-in zoom-in duration-700 delay-200">
              <Check className="h-10 w-10 text-white" strokeWidth={3} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-safari-ink mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Booking Request Sent!
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            Thank you, <strong className="text-safari-ink">{form.fullName}</strong>! We&apos;ve received your safari booking request.
            Our team will review your details and get back to you within <strong className="text-safari-green">24 hours</strong> with
            a personalized itinerary and quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Link
              href="/"
              className="rounded-lg bg-safari-green px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-safari-green-dark"
            >
              Back to Home
            </Link>
            <Link
              href="/packages"
              className="rounded-lg border-2 border-safari-green px-8 py-3.5 text-sm font-bold text-safari-green transition-colors hover:bg-safari-green hover:text-white"
            >
              Browse More Packages
            </Link>
          </div>
        </div>
      </section>
    )
  }

  /* ─────────── form steps ─────────── */

  return (
    <section className="bg-safari-cream py-16 md:py-20" ref={formRef}>
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-safari-gold md:text-[34px]">Begin Your Journey</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-safari-ink">
            Tell Us About Your Dream Safari
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Fill in the details below and our expert travel planners will craft the perfect Tanzanian adventure just for you.
          </p>
        </div>

        {/* ── Step indicator ── */}
        <div className="mb-12">
          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between relative">
            {/* Track */}
            <div className="absolute left-0 right-0 top-6 h-1 bg-border rounded-full z-0">
              <div
                className="h-full bg-gradient-to-r from-safari-green to-safari-gold rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {steps.map((s) => {
              const Icon = s.icon
              const isActive = step === s.id
              const isDone = step > s.id
              return (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => { if (isDone) { setDirection('backward'); setStep(s.id) } }}
                    disabled={!isDone}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500
                      ${isDone ? 'border-safari-green bg-safari-green text-white cursor-pointer hover:scale-110' : ''}
                      ${isActive ? 'border-safari-gold bg-white text-safari-gold scale-110 shadow-lg shadow-safari-gold/20' : ''}
                      ${!isDone && !isActive ? 'border-border bg-white text-muted-foreground' : ''}
                    `}
                  >
                    {isDone ? <Check className="h-5 w-5" strokeWidth={3} /> : <Icon className="h-5 w-5" />}
                  </button>
                  <span
                    className={`text-xs font-bold transition-colors ${isActive ? 'text-safari-gold' : isDone ? 'text-safari-green' : 'text-muted-foreground'}`}
                  >
                    {s.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-safari-ink">
                Step {step} of {steps.length}
              </span>
              <span className="text-sm font-bold text-safari-gold">{steps[step - 1].label}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-border overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-safari-green to-safari-gold rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(step / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── Form card ── */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-border/50">
          {/* Green accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-safari-green via-safari-gold to-safari-green" />

          <div className="p-6 md:p-10">
            {/* Step title */}
            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-border/50">
              {(() => {
                const Icon = steps[step - 1].icon
                return <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-safari-green/10 text-safari-green"><Icon className="h-5 w-5" /></div>
              })()}
              <div>
                <h3 className="text-xl font-bold text-safari-ink">{steps[step - 1].label}</h3>
                <p className="text-sm text-muted-foreground">
                  {step === 1 && 'Let us know who you are'}
                  {step === 2 && 'Choose your dream destination and dates'}
                  {step === 3 && "Who's coming along?"}
                  {step === 4 && 'Your comfort preferences'}
                  {step === 5 && 'Anything else we should know?'}
                </p>
              </div>
            </div>

            {/* ═══════════════ STEP 1 — Personal Info ═══════════════ */}
            {step === 1 && (
              <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-right-4 duration-500">
                <FieldGroup label="Full Name" required>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => set('fullName', e.target.value)}
                      placeholder="e.g. John Kamau"
                      className={`${inputCls} pl-10 ${errors.fullName ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                </FieldGroup>

                <FieldGroup label="Email Address" required>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="you@example.com"
                      className={`${inputCls} pl-10 ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </FieldGroup>

                <FieldGroup label="Phone Number (WhatsApp)" required hint="Include country code, e.g. +254 712 345 678">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      placeholder="+254 712 345 678"
                      className={`${inputCls} pl-10 ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </FieldGroup>

                <FieldGroup label="Nationality" required>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                    <input
                      type="text"
                      value={form.nationality}
                      onChange={(e) => set('nationality', e.target.value)}
                      placeholder="e.g. Kenyan"
                      className={`${inputCls} pl-10 ${errors.nationality ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                  </div>
                  {errors.nationality && <p className="mt-1 text-xs text-red-500">{errors.nationality}</p>}
                </FieldGroup>

                <FieldGroup label="Country of Residence" required>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                    <input
                      type="text"
                      value={form.country}
                      onChange={(e) => set('country', e.target.value)}
                      placeholder="e.g. Kenya"
                      className={`${inputCls} pl-10 ${errors.country ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                  </div>
                  {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
                </FieldGroup>
              </div>
            )}

            {/* ═══════════════ STEP 2 — Trip Details ═══════════════ */}
            {step === 2 && (
              <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="md:col-span-2">
                  <FieldGroup label="Package or Destination of Interest" required>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50 pointer-events-none" />
                      <select
                        value={form.packageInterest}
                        onChange={(e) => set('packageInterest', e.target.value)}
                        className={`${selectCls} pl-10 ${errors.packageInterest ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                      >
                        <option value="">— Select a package —</option>
                        {packages.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rotate-90 text-muted-foreground/50 pointer-events-none" />
                    </div>
                    {errors.packageInterest && <p className="mt-1 text-xs text-red-500">{errors.packageInterest}</p>}
                  </FieldGroup>
                </div>

                <FieldGroup label="Preferred Start Date" required>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50 pointer-events-none" />
                    <input
                      type="date"
                      value={form.dateFrom}
                      onChange={(e) => set('dateFrom', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`${inputCls} pl-10 ${errors.dateFrom ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                  </div>
                  {errors.dateFrom && <p className="mt-1 text-xs text-red-500">{errors.dateFrom}</p>}
                </FieldGroup>

                <FieldGroup label="Preferred End Date" required>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50 pointer-events-none" />
                    <input
                      type="date"
                      value={form.dateTo}
                      onChange={(e) => set('dateTo', e.target.value)}
                      min={form.dateFrom || new Date().toISOString().split('T')[0]}
                      className={`${inputCls} pl-10 ${errors.dateTo ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                  </div>
                  {errors.dateTo && <p className="mt-1 text-xs text-red-500">{errors.dateTo}</p>}
                </FieldGroup>
              </div>
            )}

            {/* ═══════════════ STEP 3 — Travelers ═══════════════ */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid gap-6 md:grid-cols-2">
                  <FieldGroup label="Number of Adults" required>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => set('adults', Math.max(1, form.adults - 1))}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-safari-cream text-safari-ink text-lg font-bold transition-colors hover:bg-safari-green hover:text-white hover:border-safari-green"
                      >
                        −
                      </button>
                      <span className="flex h-11 w-16 items-center justify-center rounded-lg border border-border bg-white text-lg font-bold text-safari-ink">
                        {form.adults}
                      </span>
                      <button
                        type="button"
                        onClick={() => set('adults', form.adults + 1)}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-safari-cream text-safari-ink text-lg font-bold transition-colors hover:bg-safari-green hover:text-white hover:border-safari-green"
                      >
                        +
                      </button>
                    </div>
                    {errors.adults && <p className="mt-1 text-xs text-red-500">{errors.adults}</p>}
                  </FieldGroup>

                  <FieldGroup label="Number of Children" hint="Ages 0-17">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => set('children', Math.max(0, form.children - 1))}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-safari-cream text-safari-ink text-lg font-bold transition-colors hover:bg-safari-green hover:text-white hover:border-safari-green"
                      >
                        −
                      </button>
                      <span className="flex h-11 w-16 items-center justify-center rounded-lg border border-border bg-white text-lg font-bold text-safari-ink">
                        {form.children}
                      </span>
                      <button
                        type="button"
                        onClick={() => set('children', form.children + 1)}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-safari-cream text-safari-ink text-lg font-bold transition-colors hover:bg-safari-green hover:text-white hover:border-safari-green"
                      >
                        +
                      </button>
                    </div>
                  </FieldGroup>
                </div>

                {form.children > 0 && (
                  <div className="animate-in fade-in slide-in-from-bottom-3 duration-400">
                    <FieldGroup label="Approximate Age Range of Children" hint="e.g. 3, 7, 12">
                      <input
                        type="text"
                        value={form.childrenAges}
                        onChange={(e) => set('childrenAges', e.target.value)}
                        placeholder="e.g. 3 years, 7 years"
                        className={inputCls}
                      />
                    </FieldGroup>
                  </div>
                )}

                {/* Visual summary */}
                <div className="flex items-center gap-5 rounded-xl bg-safari-green/5 px-6 py-4 ring-1 ring-safari-green/10">
                  <Users className="h-8 w-8 text-safari-green shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-safari-ink">Your Group</p>
                    <p className="text-sm text-muted-foreground">
                      {form.adults} adult{form.adults !== 1 ? 's' : ''}
                      {form.children > 0 && `, ${form.children} child${form.children !== 1 ? 'ren' : ''}`}
                      {form.childrenAges && ` (ages: ${form.childrenAges})`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ═══════════════ STEP 4 — Preferences ═══════════════ */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <FieldGroup label="Accommodation Preference" required>
                  <div className="grid gap-4 md:grid-cols-3 mt-2">
                    {([
                      { value: 'budget', label: 'Budget', desc: 'Clean & comfortable', icon: '🏕️' },
                      { value: 'mid-range', label: 'Mid-Range', desc: 'Quality & value', icon: '🏡' },
                      { value: 'luxury', label: 'Luxury', desc: 'Premium & exclusive', icon: '🏰' },
                    ] as const).map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => set('accommodation', opt.value)}
                        className={`relative flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-6 text-center transition-all duration-300 hover:shadow-md ${
                          form.accommodation === opt.value
                            ? 'border-safari-green bg-safari-green/5 shadow-md scale-[1.02]'
                            : 'border-border bg-white hover:border-safari-gold/40'
                        }`}
                      >
                        {form.accommodation === opt.value && (
                          <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-safari-green text-white animate-in zoom-in duration-300">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </div>
                        )}
                        <span className="text-3xl">{opt.icon}</span>
                        <span className="text-sm font-bold text-safari-ink">{opt.label}</span>
                        <span className="text-xs text-muted-foreground">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                  {errors.accommodation && <p className="mt-1 text-xs text-red-500">{errors.accommodation}</p>}
                </FieldGroup>

                <FieldGroup label="Special Requests, Dietary Requirements, or Accessibility Needs" hint="Vegetarian, wheelchair access, etc.">
                  <textarea
                    value={form.specialRequests}
                    onChange={(e) => set('specialRequests', e.target.value)}
                    rows={4}
                    placeholder="Tell us about any special requirements so we can make your trip perfect..."
                    className={`${inputCls} resize-none`}
                  />
                </FieldGroup>
              </div>
            )}

            {/* ═══════════════ STEP 5 — Final Details ═══════════════ */}
            {step === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <FieldGroup label="How Did You Hear About Us?">
                  <div className="relative">
                    <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50 pointer-events-none" />
                    <select
                      value={form.hearAbout}
                      onChange={(e) => set('hearAbout', e.target.value)}
                      className={`${selectCls} pl-10`}
                    >
                      <option value="">— Select an option —</option>
                      {hearAboutOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rotate-90 text-muted-foreground/50 pointer-events-none" />
                  </div>
                </FieldGroup>

                <FieldGroup label="Additional Comments or Questions">
                  <textarea
                    value={form.additionalComments}
                    onChange={(e) => set('additionalComments', e.target.value)}
                    rows={4}
                    placeholder="Any other questions or comments for our team..."
                    className={`${inputCls} resize-none`}
                  />
                </FieldGroup>

                {/* Summary preview */}
                <div className="rounded-xl border border-border bg-safari-cream/50 p-6">
                  <h4 className="text-sm font-bold text-safari-ink mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-safari-gold" />
                    Booking Summary
                  </h4>
                  <div className="grid gap-3 text-sm md:grid-cols-2">
                    <div><span className="text-muted-foreground">Name:</span> <span className="font-semibold text-safari-ink">{form.fullName}</span></div>
                    <div><span className="text-muted-foreground">Email:</span> <span className="font-semibold text-safari-ink">{form.email}</span></div>
                    <div><span className="text-muted-foreground">Phone:</span> <span className="font-semibold text-safari-ink">{form.phone}</span></div>
                    <div><span className="text-muted-foreground">From:</span> <span className="font-semibold text-safari-ink">{form.nationality}, {form.country}</span></div>
                    <div className="md:col-span-2"><span className="text-muted-foreground">Package:</span> <span className="font-semibold text-safari-ink">{form.packageInterest}</span></div>
                    <div><span className="text-muted-foreground">Dates:</span> <span className="font-semibold text-safari-ink">{form.dateFrom} → {form.dateTo}</span></div>
                    <div><span className="text-muted-foreground">Group:</span> <span className="font-semibold text-safari-ink">{form.adults} adult{form.adults !== 1 ? 's' : ''}{form.children > 0 ? `, ${form.children} child${form.children !== 1 ? 'ren' : ''}` : ''}</span></div>
                    <div><span className="text-muted-foreground">Accommodation:</span> <span className="font-semibold text-safari-ink capitalize">{form.accommodation}</span></div>
                  </div>
                </div>

                {/* Terms checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={form.agreeTerms}
                        onChange={(e) => set('agreeTerms', e.target.checked)}
                        className="peer sr-only"
                      />
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-300
                          ${form.agreeTerms ? 'border-safari-green bg-safari-green' : 'border-border bg-white group-hover:border-safari-gold'}
                          ${errors.agreeTerms ? 'border-red-400' : ''}
                        `}
                      >
                        {form.agreeTerms && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      I have read and agree to the{' '}
                      <Link href="/terms" className="text-safari-green font-semibold underline underline-offset-2 hover:text-safari-green-dark" target="_blank">
                        Terms &amp; Conditions
                      </Link>{' '}
                      of Uwanda Tours &amp; Safaris. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="mt-1 text-xs text-red-500 ml-8">{errors.agreeTerms}</p>}
                </div>
              </div>
            )}

            {/* ── Navigation buttons ── */}
            <div className="mt-10 flex items-center justify-between border-t border-border/50 pt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="flex items-center gap-2 rounded-lg border-2 border-border px-6 py-3 text-sm font-bold text-safari-ink transition-all hover:border-safari-green hover:text-safari-green"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={next}
                  className="flex items-center gap-2 rounded-lg bg-safari-green px-8 py-3 text-sm font-bold text-white transition-all hover:bg-safari-green-dark hover:shadow-lg hover:shadow-safari-green/20"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-lg bg-safari-gold px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#b0883f] hover:shadow-lg hover:shadow-safari-gold/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send My Booking Request
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { icon: '🛡️', text: 'Secure & Private' },
            { icon: '⚡', text: '24hr Response' },
            { icon: '✨', text: 'Free Consultation' },
            { icon: '🌍', text: 'Expert Local Guides' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-lg">{badge.icon}</span>
              <span className="font-semibold">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
