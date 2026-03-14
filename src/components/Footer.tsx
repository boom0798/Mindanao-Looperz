import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Mountain, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 bg-orange-500 text-zinc-950 rounded-sm overflow-hidden group-hover:bg-white transition-colors">
                <Mountain className="w-6 h-6 relative z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-zinc-950/10" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-black tracking-widest text-white uppercase leading-none mb-1">Mindanao</span>
                <span className="text-[10px] font-bold tracking-[0.35em] text-orange-500 uppercase leading-none group-hover:text-white transition-colors">Looperz</span>
              </div>
            </Link>
            <p className="text-sm mb-6">
              One Loop. Endless Adventures. Experience the ultimate motorcycle journey across the beautiful landscapes of Mindanao.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MindanaGrandLoop" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mindanao_looperz.ph/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@mindanaolooperz" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.63 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/the-loop" className="hover:text-orange-500 transition-colors">The Loop</Link></li>
              <li><Link to="/rides" className="hover:text-orange-500 transition-colors">Itineraries</Link></li>
              <li><Link to="/gear" className="hover:text-orange-500 transition-colors">Gear & Apparel</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Rider Guidelines</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Merch Store</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm">Mindanao, Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:mindanaolooperz26@gmail.com" className="text-sm hover:text-orange-500 transition-colors">mindanaolooperz26@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="https://wa.me/639913342064" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-orange-500 transition-colors">+63 9913342064 (WhatsApp)</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} Mindanao Looperz. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
