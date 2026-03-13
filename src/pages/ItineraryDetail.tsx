import { Star } from 'lucide-react';

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Mountain, Clock, Navigation, CheckCircle2, ArrowLeft, CalendarDays, ShieldAlert } from 'lucide-react';
import { itineraryService } from '../data/iteneraries/services/itineraryService.ts';

export default function ItineraryDetail() {
  const { id } = useParams();
  const route = itineraryService.getById(id ?? '');

  if (!route) {
    return (
      <div className="flex items-center justify-center h-screen text-zinc-400">
        <p>Itinerary not found.</p>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img
              src={route.image}
              alt={route.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link to="/rides" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors uppercase tracking-wider text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Rides
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
              {route.type}
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              {route.name}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-orange-500" />
                <span>{route.distance}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>{route.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-orange-500" />
                <span>{route.difficulty}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Route Overview</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {route.overview}
              </p>
            </section>

            {/* Daily Breakdown */}
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Daily Itinerary</h2>
              <div className="space-y-8">
                {route.daily.map((day) => (
                  <div key={day.day} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-orange-500 shrink-0">
                        {day.day}
                      </div>
                      <div className="w-px h-full bg-zinc-800 mt-4" />
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{day.title}</h3>
                      <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold mb-3">
                        <Map className="w-4 h-4" /> {day.distance}
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-500" /> Highlights
              </h3>
              <ul className="space-y-3">
                {route.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-orange-500" /> What to Bring
              </h3>
              <ul className="space-y-3">
                {route.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquiry Form */}
            <div className="bg-zinc-950 border border-orange-500/30 p-6">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Ride With Us</h3>
              <p className="text-zinc-400 text-sm mb-6">Interested in this route? Let us help you plan your journey.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="juan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Preferred Dates</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input 
                      type="text" 
                      className="w-full bg-zinc-900 border border-zinc-800 pl-10 pr-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g., March 2026"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider py-4 transition-colors mt-4"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

