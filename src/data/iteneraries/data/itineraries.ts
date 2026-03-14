import manifest from '../../../generated/image-manifest.json';

import type { Itinerary } from '../types/itinerary';

export const itineraries: Record<string, Itinerary> = {
  'highlands-to-hidden-water': {
    id: 'highlands-to-hidden-water',
    name: 'Highlands to hidden water (Ultimate loop)',
    distance: '803 km',
    duration: '4 Days',
    price: '260 USD',
    difficulty: 'Intermediate',
    type: 'Multi-day',
    image: 'https://i.pinimg.com/736x/62/f3/12/62f312f79497bd1749867636ed1f0021.jpg',
    images: [
      'https://i.pinimg.com/736x/62/f3/12/62f312f79497bd1749867636ed1f0021.jpg',
      'https://i.pinimg.com/1200x/24/05/db/2405dbdebdb91482433414d92f9170db.jpg',
      'https://i.pinimg.com/1200x/fb/30/8e/fb308e07ff51b26ea9b030556a8977b6.jpg',
      'https://i.pinimg.com/736x/86/44/98/86449867476045f6612b9e858cbad349.jpg',
      'https://i.pinimg.com/1200x/ce/ab/ba/ceabba7d8ccefd1748e827c3ad309c69.jpg',
      'https://i.pinimg.com/736x/ba/7b/43/ba7b43aae1e0281909143d4bc58b8385.jpg',
      'https://i.pinimg.com/736x/4b/24/ab/4b24ab18d6fb45176eb6ae3a762a5c1c.jpg'
    ],
    localImages: manifest['/iteneraries/highlands-to-hidden-water']??[],
    prompts: [
      "Aerial cityscape sunrise over Davao City with Mount Apo visible in the distance, golden hour lighting, modern tropical city vibe. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Mountain road adventure in Talaingod, rugged highlands, dramatic clouds, raw untouched landscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Rolling green hills of Bukidnon Communal Ranch, cowboy landscape, wide-angle shot, bright daylight. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Sea of clouds at Mount Kulago during sunrise, hikers silhouette, cinematic fog, epic mountain atmosphere. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Tinuy-an Falls multi-layered waterfalls, turquoise water, long exposure silky effect, lush jungle surroundings. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Enchanted River crystal-clear blue lagoon, underwater visibility, glowing sapphire water, tropical paradise mood. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Britania Islands white sandbar and turquoise ocean, drone aerial shot, tropical island dreamscape. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
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
  'crown-jewel-hike': {
    id: 'crown-jewel-hike',
    name: 'Crown Jewel Hike',
    distance: '216 KM',
    duration: '2 Days 1 Night',
    difficulty: 'Beginner',
    type: 'Hiking & Riding',
    image: 'https://i.pinimg.com/1200x/1c/1b/e0/1c1be00dc05e6248044dbe7a86d15bb6.jpg',
    images: [
      'https://i.pinimg.com/1200x/1c/1b/e0/1c1be00dc05e6248044dbe7a86d15bb6.jpg',
      'https://i.pinimg.com/1200x/50/cb/87/50cb87543c7408357d79ebc6602cdab5.jpg',
      'https://i.pinimg.com/736x/bb/cc/46/bbcc469a619be2101406bcc7a944246b.jpg',
    ],
    localImages: manifest['/iteneraries/crown-jewel-hike'] ?? [],
    prompts: [
      "Lake Holon volcanic crater lake, emerald green water surrounded by forested mountains, sunrise mist, peaceful and majestic. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Trekker standing on the rim of Lake Holon crater, looking down at the turquoise water, adventure gear, morning light. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic.",
      "Campsite by the shore of Lake Holon, tents under a starry sky, campfire glow, serene mountain lake atmosphere. Maintain consistent color grading across all images, high detail, realistic lighting, travel documentary style, National Geographic quality, ultra sharp focus, HDR, wide-angle lens, epic nature adventure theme. No text overlay. Clean composition. Instagram travel campaign aesthetic."
    ],
    overview: 'Lake Holon, also known as Lake Maughan, is a pristine crater lake nestled within Mount Melibengoy (formerly Mount Parker) in T’boli, South Cotabato, Philippines. Revered as the “Crown Jewel of the South,” this lake sits approximately 1,359 meters above sea level and spans over 3 square kilometers.',
    highlights: [
      'Lake Holon Crater',
      'Mount Melibengoy',
      'T’boli Cultural Experience',
      'Star Gazing at the Lake',
      'Sunrise at the Crater Rim'
    ],
    requirements: [
      'Minor Hiking equipment',
      'Trekking shoes or sandals',
      'Light camping gear',
      'Hydration pack',
      'Personal first aid kit'
    ],
    daily: [
      {
        day: 1,
        title: 'Davao to Lake Holon (Trek & Camp)',
        distance: '108 KM (Ride) + 5 KM (Trek)',
        description: 'Travel from Davao to T\'boli, South Cotabato. Begin the trek to the crater lake and set up camp for an overnight stay under the stars.'
      },
      {
        day: 2,
        title: 'Lake Holon to Davao (Descent & Return)',
        distance: '5 KM (Trek) + 108 KM (Ride)',
        description: 'Enjoy the sunrise at the lake, trek back to the trailhead, and return to Davao City.'
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
    image: 'https://i.pinimg.com/736x/bf/3e/63/bf3e63c7c0f5bd587f94a853bb3891ce.jpg',
    images: [
      'https://i.pinimg.com/736x/bf/3e/63/bf3e63c7c0f5bd587f94a853bb3891ce.jpg',
      'https://i.pinimg.com/736x/ad/60/22/ad60227ac792d2cc67cba0380b9897b4.jpg',
      'https://i.pinimg.com/1200x/71/eb/2c/71eb2c13cc39a3780be2ec6083efceae.jpg',
    ],
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
  },
  'buda-day-loop': {
    id: 'buda-day-loop',
    name: 'BuDa Day Loop',
    distance: '250 km',
    duration: '1 Day',
    difficulty: 'Beginner',
    type: 'Day Loop',
    image: 'https://picsum.photos/seed/buda/800/600?blur=1',
    overview: 'A quick escape to the cool mountains of Bukidnon-Davao border.',
  },
  'Surigao Coastal Run': {
    id: 'surigao-coast-run',
    name: 'Surigao Coastal Run',
    distance: '450 km',
    duration: '2-3 Days',
    difficulty: 'Intermediate',
    type: 'Multi-day',
    image: 'https://picsum.photos/seed/surigao/800/600?blur=1',
    overview: 'Experience the rugged eastern seaboard facing the Pacific Ocean.',
  },
  'Zamboanga Peninsula': {
    id: 'zamboanga-peninsula',
    name: 'Zamboanga Peninsula',
    distance: '900 km',
    duration: '5-7 Days',
    difficulty: 'Advanced',
    type: 'Multi-day',
    image: 'https://picsum.photos/seed/zamboanga/800/600?blur=1',
    overview: 'Discover the rich culture and challenging roads of the western peninsula.',
  },
};