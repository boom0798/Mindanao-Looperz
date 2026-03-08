import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Mountain, Waves, Coffee, Navigation, Star, ArrowRight } from 'lucide-react';
import { GeneratedImage } from '../components/GeneratedImage';
import { GeneratedImageCarousel } from '../components/GeneratedImageCarousel';

const featuredLoops = [
  {
    id: 'highlands-to-hidden-water',
    name: 'Highlands to hidden water (Ultimate loop)',
    distance: '803 km',
    days: '4 Days',
    terrain: 'Mixed (Paved & Gravel)',
    image: 'https://picsum.photos/seed/talaingod-bukidnon-road/800/600',
    prompts: [
      "Aerial cityscape sunrise over Davao City with Mount Apo visible in the distance, golden hour lighting, modern tropical city vibe. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Mountain road adventure in Talaingod, rugged highlands, dramatic clouds, raw untouched landscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Rolling green hills of Bukidnon Communal Ranch, cowboy landscape, wide-angle shot, bright daylight. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Sea of clouds at Mount Kulago during sunrise, hikers silhouette, cinematic fog, epic mountain atmosphere. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Tinuy-an Falls multi-layered waterfalls, turquoise water, long exposure silky effect, lush jungle surroundings. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Enchanted River crystal-clear blue lagoon, underwater visibility, glowing sapphire water, tropical paradise mood. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Britania Islands white sandbar and turquoise ocean, drone aerial shot, tropical island dreamscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Lake Holon volcanic crater lake, emerald green water surrounded by forested mountains, sunrise mist, peaceful and majestic. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic."
    ]
  },
  {
    id: 'crown-jewel-loop',
    name: 'Crown Jewel Hike',
    distance: '216 KM',
    days: '2 Days 1 Night',
    terrain: 'Crater Lake Trek',
    image: 'https://picsum.photos/seed/davao/800/600?blur=1',
    prompts: [
      "Lake Holon volcanic crater lake, emerald green water surrounded by forested mountains, sunrise mist, peaceful and majestic. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Trekker standing on the rim of Lake Holon crater, looking down at the turquoise water, adventure gear, morning light. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Campsite by the shore of Lake Holon, tents under a starry sky, campfire glow, serene mountain lake atmosphere. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic."
    ]
  },
  {
    id: 'apo-conquer-the-king',
    name: 'Apo: Conquer the King of Philippine Peaks',
    distance: '2,954 meters above sea level',
    days: '2 Days 1 Night',
    terrain: 'The highest mountain in the Philippines',
    image: 'https://picsum.photos/seed/mindanao/800/600?blur=1',
    prompts: [
      "Sunrise view of Mount Apo peak above the clouds, golden light hitting rocky summit, dramatic sky, aerial wide-angle shot. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Dense mossy forest trail with towering trees and thick fog, hikers walking with headlamps, mystical rainforest atmosphere. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Sulfur vents and volcanic rocks near the summit, rugged terrain, steam rising from the ground, raw natural power. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Boulder face summit shot with Philippine flag, triumphant climber silhouette against sunrise horizon. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Lake Venado campsite reflection of Mount Apo, calm water, sunset colors, peaceful high-altitude lake scene. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Panoramic summit ridge view overlooking Mindanao landscape, dramatic clouds, epic high-altitude photography. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence."
    ]
  },
];

const testimonials = [
  {
    name: 'Jomarie Granada',
    role: 'Expedition Leader',
    quote: 'Riding the Mindanao Loop changed my perspective completely. The roads in Bukidnon are world-class, and the people are incredibly welcoming.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jomarie&skinColor=ae5d29&hairColor=2c1b18&top=shortHairShortFlat',
  },
  {
    name: 'Glenn Noroño',
    role: 'Weekend rider',
    quote: 'The coastal roads of Surigao offer some of the best views I\'ve ever seen. It\'s a must-do for any serious rider in the Philippines.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Glenn&skinColor=edb98a&hairColor=2c1b18&top=shortHairShortRound',
  },
  {
    name: 'Kenneth Bernales',
    role: 'Tour Guide',
    quote: 'Guiding riders through the Mindanao Loop is an absolute thrill. The transition from the peaks of Talaingod to the rushing waters of CDO and the magical Enchanted River makes this route truly unforgettable.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Kenneth&skinColor=edb98a&hairColor=2c1b18&top=shortHairCurly&accessories=prescription02',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/motorcycle-adventure/1920/1080"
            alt="Motorcycle adventure in Mindanao"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6"
          >
            We will be the first<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 italic">
              full Mindanao Looperz.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 mb-10 font-medium max-w-3xl mx-auto"
          >
            Mountains. Rivers. Falls. Surreal Beaches.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/the-loop" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider rounded-none transition-colors"
            >
              View the Loop
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold uppercase tracking-wider rounded-none transition-colors"
            >
              Ride With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
            One Loop. <span className="text-orange-500">Endless Adventures.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            The Mindanao Loop is more than just a route; it's a rite of passage. It's a long-distance motorcycle journey that spans multiple provinces, taking you through the heart of the Philippines' second-largest island. Experience diverse cultures, breathtaking landscapes, and the unparalleled freedom of the open road.
          </p>
        </div>
      </section>

      {/* Featured Loops */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Featured Routes</h2>
              <p className="text-zinc-400 mt-2">Discover our most popular riding itineraries.</p>
            </div>
            <Link to="/rides" className="hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold uppercase tracking-wider transition-colors">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLoops.map((loop) => (
              <div key={loop.id} className="bg-zinc-950 border border-zinc-800 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  {loop.prompts ? (
                    <GeneratedImageCarousel 
                      prompts={loop.prompts}
                      altPrefix={loop.name}
                      className="w-full h-full"
                    />
                  ) : (
                    <img 
                      src={loop.image} 
                      alt={loop.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{loop.name}</h3>
                  <div className="space-y-2 mb-6 text-zinc-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-orange-500" />
                      <span>{loop.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Map className="w-4 h-4 text-orange-500" />
                      <span>{loop.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-orange-500" />
                      <span>{loop.terrain}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/rides/${loop.id}`}
                    className="block w-full text-center py-3 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all uppercase tracking-wider font-semibold text-sm"
                  >
                    View Route
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/rides" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold uppercase tracking-wider transition-colors">
              View All Routes <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ride Mindanao Loop */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Why Ride Mindanao?</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Experience the raw beauty and authentic culture of the Philippines' southern frontier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Mountain, title: 'Scenic Mountain Passes', desc: 'Conquer the winding roads of Bukidnon and Buda with cool weather and pine trees.' },
              { icon: Waves, title: 'Coastal Roads', desc: 'Ride alongside pristine beaches and dramatic cliffs facing the Pacific Ocean.' },
              { icon: Coffee, title: 'Local Culture & Food', desc: 'Taste authentic regional delicacies and experience genuine Mindanaoan hospitality.' },
              { icon: Navigation, title: 'Freedom of the Open Road', desc: 'Escape the traffic and enjoy hundreds of kilometers of uninterrupted riding.' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors text-center">
                <div className="w-16 h-16 mx-auto bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">Stories from the Road</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-zinc-950 p-8 border border-zinc-800 relative">
                <Star className="absolute top-8 right-8 w-6 h-6 text-orange-500/20" />
                <p className="text-zinc-300 italic mb-8 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm">{testimonial.name}</h4>
                    <p className="text-orange-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
