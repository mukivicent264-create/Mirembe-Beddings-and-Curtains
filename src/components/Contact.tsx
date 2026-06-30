import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-warm border-t border-soft/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 70, damping: 15 }}
            className="max-w-xl"
          >
            <span className="text-rose font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
              We'd Love to Hear From You
            </h2>
            <p className="text-charcoal/70 text-lg mb-12 leading-relaxed font-medium">
              Whether you have a question about our collections, need help with sizing, or want to discuss a custom order, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-rose group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-charcoal mb-1">Email Us</h4>
                  <p className="text-charcoal/60">hello@mirembefurnishings.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-rose group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-charcoal mb-1">Call Us</h4>
                  <p className="text-charcoal/60">+256 700 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-rose group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-charcoal mb-1">Visit Us</h4>
                  <p className="text-charcoal/60">123 Design Street<br />Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 70, damping: 15 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-soft/50 relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose/10 rounded-full blur-2xl -z-10"></div>
            
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-8">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold tracking-wider uppercase text-charcoal/80 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-soft/30 border border-soft text-charcoal px-5 py-4 rounded-xl focus:outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/20 transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold tracking-wider uppercase text-charcoal/80 mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter password"
                  className="w-full bg-soft/30 border border-soft text-charcoal px-5 py-4 rounded-xl focus:outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold tracking-wider uppercase text-charcoal/80 mb-2">Your Message</label>
                <textarea 
                  placeholder="How can we help you today?"
                  rows={4}
                  className="w-full bg-soft/30 border border-soft text-charcoal px-5 py-4 rounded-xl focus:outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/20 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                onTouchStart={() => {}}
                className="w-full bg-rose text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-rose/90 active:scale-95 active:bg-rose-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer touch-manipulation"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
