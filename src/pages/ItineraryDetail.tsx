import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Mountain, Clock, Navigation, CheckCircle2, ArrowLeft, CalendarDays, ShieldAlert } from 'lucide-react';
import { GeneratedImage } from '../components/GeneratedImage';
import { GeneratedImageCarousel } from '../components/GeneratedImageCarousel';

// Mock data for itineraries
const itinerariesData: Record<string, any> = {
  'highlands-to-hidden-water': {
    id: 'highlands-to-hidden-water',
    name: 'Highlands to hidden water (Ultimate loop)',
    distance: '803 km',
    duration: '4 Days',
    difficulty: 'Intermediate',
    type: 'Multi-day',
    image: 'https://in.pinterest.com/pin/323837029461068291',
    prompts: [
      "Aerial cityscape sunrise over Davao City with Mount Apo visible in the distance, golden hour lighting, modern tropical city vibe. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Mountain road adventure in Talaingod, rugged highlands, dramatic clouds, raw untouched landscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Rolling green hills of Bukidnon Communal Ranch, cowboy landscape, wide-angle shot, bright daylight. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Sea of clouds at Mount Kulago during sunrise, hikers silhouette, cinematic fog, epic mountain atmosphere. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Tinuy-an Falls multi-layered waterfalls, turquoise water, long exposure silky effect, lush jungle surroundings. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Enchanted River crystal-clear blue lagoon, underwater visibility, glowing sapphire water, tropical paradise mood. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Britania Islands white sandbar and turquoise ocean, drone aerial shot, tropical island dreamscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Lake Holon volcanic crater lake, emerald green water surrounded by forested mountains, sunrise mist, peaceful and majestic. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic."
    ],
    overview: 'The ultimate Mindanao adventure route in the Philippines.',
    highlights: [
      'Davao City',
      'Talaingod',
      'Bukidnon Communal Ranch',
      'Mount Kulago',
      'Tinuy-an Falls',
      'Enchanted River',
      'Britania Islands',
      'Lake Holon'
    ],
    requirements: [
      'Minimum 400cc motorcycle recommended',
      'Full riding gear (Helmet, Jacket, Gloves, Boots)',
      'Valid Driver\'s License',
      'Basic tool kit and tire repair kit',
      'Rain gear'
    ],
    daily: [
      {
        day: 1,
        title: 'Davao to Bukidnon',
        distance: '150 km',
        description: 'Start in Davao City, ride through the scenic Talaingod pass and reach the rolling hills of Bukidnon.'
      },
      {
        day: 2,
        title: 'Bukidnon to Surigao del Sur',
        distance: '200 km',
        description: 'Head east towards the coast, visiting the majestic Tinuy-an Falls and the mystical Enchanted River.'
      },
      {
        day: 3,
        title: 'Surigao del Sur to South Cotabato',
        distance: '250 km',
        description: 'Ride south along the coast, passing by the Britania Islands before heading inland to Lake Holon.'
      }
    ]
  },
  'crown-jewel-loop': {
    id: 'crown-jewel-loop',
    name: 'Crown Jewel Loop',
    distance: '600 km',
    duration: '3-4 Days',
    difficulty: 'Beginner',
    type: 'Multi-day',
    image: 'https://picsum.photos/seed/davao/1920/1080?blur=1',
    prompts: [
      "Aerial cityscape sunrise over Davao City with Mount Apo visible in the distance, golden hour lighting, modern tropical city vibe. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Mountain road adventure in Talaingod, rugged highlands, dramatic clouds, raw untouched landscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Rolling green hills of Bukidnon Communal Ranch, cowboy landscape, wide-angle shot, bright daylight. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Sea of clouds at Mount Kulago during sunrise, hikers silhouette, cinematic fog, epic mountain atmosphere. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Tinuy-an Falls multi-layered waterfalls, turquoise water, long exposure silky effect, lush jungle surroundings. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Enchanted River crystal-clear blue lagoon, underwater visibility, glowing sapphire water, tropical paradise mood. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Britania Islands white sandbar and turquoise ocean, drone aerial shot, tropical island dreamscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Lake Holon volcanic crater lake, emerald green water surrounded by forested mountains, sunrise mist, peaceful and majestic. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic."
    ],
    overview: 'A cinematic travel route featuring the ultimate Mindanao adventure in the Philippines. Experience the raw beauty of the south, from the bustling city of Davao to the serene waters of Enchanted River and the majestic peaks of Mount Apo.',
    highlights: [
      'Davao City & Mount Apo',
      'Talaingod Mountain Pass',
      'Bukidnon Communal Ranch',
      'Mount Kulago Sea of Clouds',
      'Tinuy-an Falls',
      'Enchanted River',
      'Britania Islands',
      'Lake Holon'
    ],
    requirements: [
      'Any well-maintained motorcycle',
      'Basic riding gear',
      'Valid Driver\'s License',
      'Camera for the epic views'
    ],
    daily: [
      {
        day: 1,
        title: 'Davao to Bukidnon',
        distance: '150 km',
        description: 'Start in Davao City, ride through the scenic Talaingod pass and reach the rolling hills of Bukidnon.'
      },
      {
        day: 2,
        title: 'Bukidnon to Surigao del Sur',
        distance: '200 km',
        description: 'Head east towards the coast, visiting the majestic Tinuy-an Falls and the mystical Enchanted River.'
      },
      {
        day: 3,
        title: 'Surigao del Sur to South Cotabato',
        distance: '250 km',
        description: 'Ride south along the coast, passing by the Britania Islands before heading inland to Lake Holon.'
      }
    ]
  },
  'apo-conquer-the-king': {
    id: 'apo-conquer-the-king',
    name: 'Apo: Conquer the King of Philippine Peaks',
    distance: '2,954 meters above sea level',
    duration: '2 Days 1 Night',
    difficulty: 'Expert',
    type: 'Mountaineering',
    image: 'https://picsum.photos/seed/mindanao/1920/1080?blur=1',
    prompts: [
      "Sunrise view of Mount Apo peak above the clouds, golden light hitting rocky summit, dramatic sky, aerial wide-angle shot. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Dense mossy forest trail with towering trees and thick fog, hikers walking with headlamps, mystical rainforest atmosphere. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Sulfur vents and volcanic rocks near the summit, rugged terrain, steam rising from the ground, raw natural power. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Boulder face summit shot with Philippine flag, triumphant climber silhouette against sunrise horizon. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Lake Venado campsite reflection of Mount Apo, calm water, sunset colors, peaceful high-altitude lake scene. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Panoramic summit ridge view overlooking Mindanao landscape, dramatic clouds, epic high-altitude photography. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence."
    ],
    overview: 'The ultimate mountaineering and riding experience. Conquer the highest peak in the Philippines, Mount Apo. This journey takes you through dense forests, volcanic terrain, and breathtaking high-altitude landscapes.',
    highlights: [
      'Mount Apo Summit',
      'Lake Venado',
      'Mossy Forest Trail',
      'Sulfur Vents',
      'Panoramic Mindanao Views'
    ],
    requirements: [
      'Excellent physical fitness',
      'Mountaineering gear',
      'Guide and permit',
      'Cold weather clothing'
    ],
    daily: [
      {
        day: 1,
        title: 'Trailhead to Camp 1',
        distance: '5 km hike',
        description: 'Begin the ascent through the dense mossy forest, acclimatizing to the elevation.'
      },
      {
        day: 2,
        title: 'Camp 1 to Lake Venado',
        distance: '8 km hike',
        description: 'Trek through rugged terrain and sulfur vents to reach the serene Lake Venado campsite.'
      },
      {
        day: 3,
        title: 'Summit Assault and Descent',
        distance: '10 km hike',
        description: 'Early morning summit assault for the sunrise view, followed by the descent back to the trailhead.'
      }
    ]
  }
};

export default function ItineraryDetail() {
  const { id } = useParams();
  
  // In a real app, we would fetch data based on the ID.
  // For now, we'll just use the mock data.
  const route = id && itinerariesData[id] ? itinerariesData[id] : itinerariesData['highlands-to-hidden-water'];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          {route.prompts ? (
            <GeneratedImageCarousel 
              prompts={route.prompts}
              altPrefix={route.name}
              className="w-full h-full"
            />
          ) : route.prompt ? (
            <GeneratedImage 
              prompt={route.prompt}
              alt={route.name}
              fallbackImage={route.image}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={route.image}
              alt={route.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
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

// Add Star icon since it was missing from imports
import { Star } from 'lucide-react';
