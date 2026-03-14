import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Mountain, Clock, Navigation } from 'lucide-react';
import { GeneratedImage } from '../components/GeneratedImage';
import { GeneratedImageCarousel } from '../components/GeneratedImageCarousel';

const itineraries = [
  {
    id: 'highlands-to-hidden-water',
    name: 'Highlands to hidden water (Ultimate loop)',
    distance: '803 km',
    duration: '4 Days',
    price: '260 USD',
    difficulty: 'Intermediate',
    type: 'Multi-day',
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
    ],
    description: 'The ultimate Mindanao adventure route in the Philippines.',
  },
  {
    id: 'crown-jewel-loop',
    name: 'Crown Jewel Hike',
    distance: '216 KM',
    duration: '2 Days 1 Night',
    difficulty: 'Beginner',
    type: 'Hiking & Riding',
    image: 'https://picsum.photos/seed/davao/800/600?blur=1',
    prompts: [
      "Lake Holon volcanic crater lake, emerald green water surrounded by forested mountains, sunrise mist, peaceful and majestic. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Trekker standing on the rim of Lake Holon crater, looking down at the turquoise water, adventure gear, morning light. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Campsite by the shore of Lake Holon, tents under a starry sky, campfire glow, serene mountain lake atmosphere. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic."
    ],
    description: 'Lake Holon, the “Crown Jewel of the South,” a pristine crater lake in T’boli.',
  },
  {
    id: 'apo-conquer-the-king',
    name: 'Apo: Conquer the King of Philippine Peaks',
    distance: '2,954 meters above sea level',
    duration: '2 Days 1 Night',
    difficulty: 'Expert',
    type: 'Mountaineering',
    image: 'https://picsum.photos/seed/mindanao/800/600?blur=1',
    prompts: [
      "Sunrise view of Mount Apo peak above the clouds, golden light hitting rocky summit, dramatic sky, aerial wide-angle shot. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Dense mossy forest trail with towering trees and thick fog, hikers walking with headlamps, mystical rainforest atmosphere. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Sulfur vents and volcanic rocks near the summit, rugged terrain, steam rising from the ground, raw natural power. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Boulder face summit shot with Philippine flag, triumphant climber silhouette against sunrise horizon. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Lake Venado campsite reflection of Mount Apo, calm water, sunset colors, peaceful high-altitude lake scene. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence.",
      "Panoramic summit ridge view overlooking Mindanao landscape, dramatic clouds, epic high-altitude photography. No text overlay, ultra-detailed textures, realistic skin tones if hikers are visible, adventure documentary style, professional DSLR quality, vibrant yet natural colors, cinematic storytelling sequence."
    ],
    description: 'The highest mountain in the Philippines. A challenging but rewarding climb.',
  },
  {
    id: 'buda-day-loop',
    name: 'BuDa Day Loop',
    distance: '250 km',
    duration: '1 Day',
    difficulty: 'Beginner',
    type: 'Day Loop',
    image: 'https://picsum.photos/seed/buda/800/600?blur=1',
    description: 'A quick escape to the cool mountains of Bukidnon-Davao border.',
  },
  {
    id: 'surigao-coast',
    name: 'Surigao Coastal Run',
    distance: '450 km',
    duration: '2-3 Days',
    difficulty: 'Intermediate',
    type: 'Multi-day',
    image: 'https://picsum.photos/seed/surigao/800/600?blur=1',
    description: 'Experience the rugged eastern seaboard facing the Pacific Ocean.',
  },
  {
    id: 'zamboanga-peninsula',
    name: 'Zamboanga Peninsula',
    distance: '900 km',
    duration: '5-7 Days',
    difficulty: 'Advanced',
    type: 'Multi-day',
    image: 'https://picsum.photos/seed/zamboanga/800/600?blur=1',
    description: 'Discover the rich culture and challenging roads of the western peninsula.',
  },
];

export default function Rides() {
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
            Rides & <span className="text-orange-500">Itineraries</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            From quick day trips to epic multi-week expeditions, find the perfect route for your next adventure.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((route, idx) => (
            <motion.div 
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                {route.prompts ? (
                  <GeneratedImageCarousel 
                    prompts={route.prompts}
                    altPrefix={route.name}
                    className="w-full h-full"
                  />
                ) : (
                  <img 
                    src={route.image} 
                    alt={route.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 z-30">
                  {route.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-20" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{route.name}</h3>
                <p className="text-zinc-400 text-sm mb-6 flex-grow">{route.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-zinc-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-orange-500" />
                    <span>{route.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Mountain className="w-4 h-4 text-orange-500" />
                    <span>Difficulty: <span className="text-white font-medium">{route.difficulty}</span></span>
                  </div>
                  {route.price && (
                    <div className="flex items-center gap-2 col-span-2 text-white font-bold text-lg mt-2">
                      <span className="text-orange-500">$</span>
                      <span>{route.price}</span>
                    </div>
                  )}
                </div>
                
                <Link 
                  to={`/rides/${route.id}`}
                  className="block w-full text-center py-3 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all uppercase tracking-wider font-semibold text-sm mt-auto"
                >
                  View Itinerary
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
