import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, Mountain } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'The Loop', path: '/the-loop' },
  { name: 'Rides & Itineraries', path: '/rides' },
  { name: 'Gear & Apparel', path: '/gear' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isOpen ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-orange-500 text-zinc-950 rounded-sm overflow-hidden group-hover:bg-white transition-colors">
              <Mountain className="w-6 h-6 relative z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-zinc-950/10" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-widest text-white uppercase leading-none mb-1">Mindanao</span>
              <span className="text-[10px] font-bold tracking-[0.35em] text-orange-500 uppercase leading-none group-hover:text-white transition-colors">Looperz</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-semibold uppercase tracking-wider transition-colors hover:text-orange-500',
                  location.pathname === link.path ? 'text-orange-500' : 'text-zinc-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        )}
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider',
                location.pathname === link.path
                  ? 'bg-orange-500/10 text-orange-500'
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 px-3 pt-4 pb-2 border-t border-zinc-800">
            <a href="https://www.facebook.com/MindanaGrandLoop" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/mindanao_looperz.ph/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            {/* TikTok icon */}
            <a href="https://www.tiktok.com/@bisayangbackpaker" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.63 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
