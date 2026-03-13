import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Have questions about the loop? Want to partner with us? We're here to help you plan your ultimate Mindanao adventure.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-1">Email Us</h3>
                    <a href="mailto:mindanaolooperz26@gmail.com" className="text-lg font-bold text-white hover:text-orange-500 transition-colors">
                      mindanaolooperz26@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-1">WhatsApp / Call</h3>
                    <a href="https://wa.me/639913342064" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-orange-500 transition-colors">
                      +63 9913342064
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-1">Location</h3>
                    <p className="text-lg font-bold text-white">
                      Mindanao, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500 p-8 rounded-sm text-zinc-950">
              <MessageSquare className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Join the Community</h3>
              <p className="font-medium mb-6">
                Follow our journey on social media and connect with fellow looperz from around the world.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/MindanaGrandLoop" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-950 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-sm">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Dela Cruz"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="juan@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Subject</label>
                <select className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Route Planning</option>
                  <option>Partnership</option>
                  <option>Merchandise</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest py-4 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
