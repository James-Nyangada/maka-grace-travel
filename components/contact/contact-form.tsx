import { Send, User, Mail, Edit3 } from 'lucide-react'

export function ContactForm() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-safari-ink mb-12 text-center">Get In Touch</h2>
        
        {/* Form Container */}
        <div className="bg-[#f9f5ef] p-8 md:p-12 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
          <h3 className="text-3xl font-sans font-bold text-safari-ink mb-4 text-center">Have Questions?</h3>
          <p className="text-muted-foreground text-[15px] mb-10 leading-relaxed max-w-lg mx-auto text-center">
            Please don't hesitate to reach us for any enquiry. We are available 24/7. Feel free to write us, we will reply as soon as possible when we receive your messages through our contact methods.
          </p>
          
          <form className="space-y-8 max-w-lg mx-auto">
            <div className="relative border-b border-gray-300 pb-3 group focus-within:border-safari-green transition-colors">
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-safari-green pb-3 transition-colors">
                <User className="w-5 h-5" />
              </div>
              <input 
                id="contact-name"
                name="name"
                type="text" 
                placeholder="Your Name*" 
                required
                aria-required="true"
                className="w-full bg-transparent border-none pl-10 focus:outline-none focus:ring-0 text-safari-ink placeholder:text-gray-600 text-[15px]"
              />
            </div>
            
            <div className="relative border-b border-gray-300 pb-3 group focus-within:border-safari-green transition-colors">
              <label htmlFor="contact-email" className="sr-only">Email Address</label>
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-safari-green pb-3 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                id="contact-email"
                name="email"
                type="email" 
                placeholder="Email Address*" 
                required
                aria-required="true"
                className="w-full bg-transparent border-none pl-10 focus:outline-none focus:ring-0 text-safari-ink placeholder:text-gray-600 text-[15px]"
              />
            </div>

            <div className="relative border-b border-gray-300 pb-3 group focus-within:border-safari-green transition-colors pt-2">
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <div className="absolute top-2 left-0 flex items-start pointer-events-none text-gray-400 group-focus-within:text-safari-green transition-colors">
                <Edit3 className="w-5 h-5" />
              </div>
              <textarea 
                id="contact-message"
                name="message"
                placeholder="Enter Your Message here" 
                rows={4}
                className="w-full bg-transparent border-none pl-10 focus:outline-none focus:ring-0 text-safari-ink placeholder:text-gray-600 text-[15px] resize-none"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="inline-flex items-center gap-2 bg-[#0F4A33] hover:bg-[#0a3323] text-white px-8 py-3.5 font-bold transition-colors text-[15px] rounded-lg shadow-sm">
                <Send className="w-4 h-4" />
                Get In Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
