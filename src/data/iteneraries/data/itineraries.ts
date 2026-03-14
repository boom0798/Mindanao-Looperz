import manifest from '../../../generated/image-manifest.json';

import type { Itinerary } from '../types/itinerary';

export const itineraries: Record<string, Itinerary> = {
  'highlands-to-hidden-water': {
    id: 'highlands-to-hidden-water',
    name: 'Highlands to hidden water (Ultimate loop)',
    distance: '803 km',
    duration: '4 Days',
    difficulty: 'Intermediate',
    type: 'Multi-day',
    image: '/iteneraries/highlands-to-hidden-water/478ab1881123db8c8df1d020b188a5e3.jpg',
    images: manifest['/iteneraries/highlands-to-hidden-water'] ?? [],
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
    image: '/iteneraries/crown-jewel-hike/471548536_18479366956019581_2726363955642537410_n.jpg',
    images: manifest['/iteneraries/crown-jewel-hike'] ?? [],
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
    image: 'https://picsum.photos/seed/mindanao/1920/1080?blur=1',
    images: [],
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