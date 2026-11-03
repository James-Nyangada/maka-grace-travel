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

export async function FloatingWidgets() {
  let settings = null;
  try {
    const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    const apiUrl = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
    const res = await fetch(`${apiUrl}/settings`, {
      next: { revalidate: 60 }
    });
    if (res.ok) {
      settings = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch contact settings for whatsapp widget:", error);
  }

  const phoneNumber = settings?.phoneNumber || "+254 705 794 254";
  const whatsappNumber = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="block transition-transform hover:scale-110 drop-shadow-xl"
      >
        <WhatsAppIcon className="h-14 w-14" />
      </a>
    </aside>
  )
}
