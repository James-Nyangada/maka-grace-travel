import { Send, User, Mail, Edit3 } from 'lucide-react'

export function ContactForm() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-safari-ink mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Map */}
          <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-xl overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.348612056238!2d39.278918!3d-6.808801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bfb0d4f40bb%3A0xc66c1b3f9dbfdf05!2sUwanda%20Tours%20And%20Safaris!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form */}
          <div className="bg-[#f9f9f9] p-8 md:p-12 h-full flex flex-col justify-center">
            <h3 className="text-3xl font-sans font-bold text-safari-ink mb-4">Have Questions?</h3>
            <p className="text-muted-foreground text-[15px] mb-10 leading-relaxed max-w-lg">
              Please don't hesitate to reach us for any enquiry. We are available 24/7. Feel free to write us, we will reply as soon as possible when we receive your messages through our contact methods.
            </p>
            
            <form className="space-y-8 max-w-lg">
              <div className="relative border-b border-gray-300 pb-3 group focus-within:border-safari-green transition-colors">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-safari-green pb-3 transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Your Name*" 
                  required
                  className="w-full bg-transparent border-none pl-10 focus:outline-none focus:ring-0 text-safari-ink placeholder:text-gray-500 text-[15px]"
                />
              </div>
              
              <div className="relative border-b border-gray-300 pb-3 group focus-within:border-safari-green transition-colors">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-safari-green pb-3 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address*" 
                  required
                  className="w-full bg-transparent border-none pl-10 focus:outline-none focus:ring-0 text-safari-ink placeholder:text-gray-500 text-[15px]"
                />
              </div>

              <div className="relative border-b border-gray-300 pb-3 group focus-within:border-safari-green transition-colors pt-2">
                <div className="absolute top-2 left-0 flex items-start pointer-events-none text-gray-400 group-focus-within:text-safari-green transition-colors">
                  <Edit3 className="w-5 h-5" />
                </div>
                <textarea 
                  placeholder="Enter Your Message here" 
                  rows={4}
                  className="w-full bg-transparent border-none pl-10 focus:outline-none focus:ring-0 text-safari-ink placeholder:text-gray-500 text-[15px] resize-none"
                ></textarea>
              </div>

              <button type="button" className="inline-flex items-center gap-2 bg-[#0F4A33] hover:bg-[#0a3323] text-white px-8 py-3.5 font-bold transition-colors mt-4 text-[15px]">
                <Send className="w-4 h-4" />
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
