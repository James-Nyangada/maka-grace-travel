'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        fill="#fff"
        d="M16 6.5c-5.2 0-9.4 4.2-9.4 9.4 0 1.7.4 3.3 1.2 4.7L6.5 25.5l5-1.3c1.4.8 2.9 1.2 4.5 1.2 5.2 0 9.4-4.2 9.4-9.4S21.2 6.5 16 6.5zm0 17.1c-1.4 0-2.8-.4-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3c-.8-1.2-1.2-2.7-1.2-4.1 0-4.3 3.5-7.8 7.9-7.8 4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4 0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.2-.2-.2-.4-.3z"
      />
    </svg>
  )
}

export function FloatingWidgets() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-end gap-4 px-4 py-8 lg:px-8">
      <div className="flex w-full items-center justify-between gap-4 rounded-3xl bg-white/95 px-4 py-4 shadow-xl ring-1 ring-slate-200 sm:px-6">
        <a
          href="https://wa.me/255762378870"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="block h-12 w-12 transition-transform hover:scale-110"
        >
          <WhatsAppIcon className="h-12 w-12" />
        </a>

        {visible && (
          <div className="relative flex items-center gap-3 rounded-full bg-safari-green/5 px-4 py-3 text-safari-ink shadow-lg ring-1 ring-slate-200">
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss chat prompt"
              className="absolute right-3 top-3 p-1 text-safari-ink/70 hover:text-safari-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="text-sm font-bold italic text-sky-500">We Are Here!</span>
            <span className="text-2xl" aria-hidden="true">
              👋
            </span>
            <button
              type="button"
              aria-label="Open chat"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-safari-green text-white shadow-xl ring-4 ring-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.7 1.4 5.1 3.6 6.7-.1.9-.5 2.3-1.5 3.6 0 0 2.5-.3 4.5-1.7 1.1.3 2.2.5 3.4.5 5.5 0 10-3.9 10-8.7S17.5 3 12 3z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
