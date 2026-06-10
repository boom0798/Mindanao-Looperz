import { motion } from 'motion/react';
import { ShoppingBag, Award, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { GeneratedImage } from '../components/GeneratedImage';

const gearItems = [
  {
    id: 1,
    name: 'Official "King of Peaks" Tech Shirt',
    category: 'Apparel',
    price: '₱950',
    description: 'Moisture-wicking, breathable fabric designed for high-altitude endurance. Features the Mindanao Looperz expedition logo.',
    prompt: 'Professional ecommerce product photography of a "Mindanao Looperz" adventure travel t-shirt, black cotton shirt with orange mountain and loop road logo, worn by a traveler standing on a mountain viewpoint overlooking tropical landscape in Mindanao, casual travel outfit, natural sunlight, cinematic outdoor photography, adventure lifestyle branding, minimal background blur, product focused, high detail, modern outdoor apparel brand aesthetic',
    image: 'https://picsum.photos/seed/looperz-shirt/600/600',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Expedition Trucker Cap',
    category: 'Apparel',
    price: '₱850',
    description: 'Rugged canvas front with breathable mesh back. Embroidered 3D mountain badge logo.',
    prompt: 'Adventure travel photography of a person wearing a "Mindanao Looperz" cap, black cap with orange mountain and road loop logo, backpacker standing on a scenic tropical mountain road, wind blowing, natural lighting, Philippines adventure travel aesthetic, realistic lifestyle product photography for website shop, high resolution, cinematic composition',
    image: 'https://picsum.photos/seed/looperz-cap/600/600',
  },
  {
    id: 3,
    name: 'Mindanao Looperz Adventure Flag',
    category: 'Identity',
    price: '₱990',
    description: 'Durable weather-resistant flag for summit photos and basecamp marking. High-visibility orange and black.',
    prompt: 'Epic travel photography of a "Mindanao Looperz" adventure flag planted on a mountain viewpoint in Mindanao Philippines, black and orange flag with mountain and loop road logo waving in the wind, dramatic clouds, jungle mountains, cinematic adventure atmosphere, travel brand identity photo, ultra realistic',
    image: 'https://picsum.photos/seed/looperz-flag/600/600',
  },
  {
    id: 4,
    name: 'Multi-functional Bandana / Buff',
    category: 'Apparel',
    price: '₱450',
    description: 'Seamless microfiber protection against dust, wind, and sun. Features the Mindanao topographical map print.',
    prompt: 'Professional studio product mockup of a multi-functional adventure bandana, black and orange topographic map design of Mindanao, "Mindanao Looperz" logo integrated into the pattern, high-quality seamless microfiber texture, displayed on a clean minimalist background, adventure gear branding, 8k resolution, realistic fabric folds',
    image: 'https://picsum.photos/seed/looperz-buff/600/600',
  },
  {
    id: 5,
    name: 'Looperz 35L Adventure Backpack',
    category: 'Equipment',
    price: '₱1,500',
    description: 'Weather-resistant ripstop nylon with integrated rain cover and "Mindanao Looperz" embroidered patch.',
    prompt: 'Ultra realistic outdoor gear photography, 35L hiking backpack with "Mindanao Looperz" embroidered patch logo (mountain and loop road icon), traveler walking on tropical jungle trail in Mindanao, camping gear attached to backpack, authentic backpacking lifestyle, natural earth tones, adventure travel brand style, professional ecommerce lifestyle image',
    image: 'https://picsum.photos/seed/looperz-pack/600/600',
    tag: 'Premium'
  },
  {
    id: 6,
    name: 'Full Expedition Collection Set',
    category: 'Bundles',
    price: '₱1,000',
    description: 'The complete set: T-shirt, Cap, Bandana, Patch, and Flag. Limited time expedition bundle.',
    prompt: 'Flat lay adventure travel gear photography featuring the Mindanao Looperz brand apparel collection: black t-shirt, cap, bandana, backpack patch, and adventure flag with orange mountain and loop road logo, arranged on a hiking map and camping gear, tropical jungle background, professional ecommerce photography, outdoor adventure branding',
    image: 'https://picsum.photos/seed/looperz-collection/600/600',
    tag: 'Value Bundle'
  }
];

export default function Gear() {
  return (
    <div className="w-full pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Official <span className="text-orange-500">Gear & Apparel</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-10">
            Gear up for the ultimate Mindanao adventure. Our premium apparel and equipment are tested in the rugged terrains of the south.
          </p>
          
          <div className="relative aspect-[21/9] w-full overflow-hidden border border-zinc-800 bg-zinc-900 rounded-sm">
            <GeneratedImage 
              prompt='Ultra-realistic outdoor adventure photography, two backpackers hiking a lush tropical mountain trail in Mindanao Philippines, wearing branded apparel "Mindanao Looperz", natural travel clothing, black and orange logo featuring mountain and loop road icon, one wearing a cap and backpack with logo patch, another wearing a t-shirt with the logo, tropical jungle environment, cinematic lighting, travel photography style, authentic backpacking vibe similar to Ha Giang Loop travelers, realistic textures, natural colors, adventure brand aesthetic, professional website hero image, ultra detailed, 8k resolution'
              alt="Mindanao Looperz Expedition Team"
              fallbackImage="https://picsum.photos/seed/looperz-hero/1200/500"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end justify-start p-8">
              <div className="text-left">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Expedition Grade</span>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Built for the South</h2>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Certificate Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-orange-500 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Award size={400} />
          </div>
          
          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 bg-zinc-950 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              <Star className="w-3 h-3 fill-current" /> Finisher's Reward
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-950 uppercase tracking-tight mb-4">
              Earn Your Certificate
            </h2>
            <p className="text-zinc-900 font-medium text-lg mb-6 max-w-xl">
              Complete the Full Mindanao Loop or the Mount Apo Summit and receive an official, serialized Finisher's Certificate signed by the Mindanao Looperz Expedition Team.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-zinc-950 font-bold uppercase text-sm">
                <CheckCircle2 className="w-5 h-5" /> GPS Verified
              </div>
              <div className="flex items-center gap-2 text-zinc-950 font-bold uppercase text-sm">
                <CheckCircle2 className="w-5 h-5" /> Serialized ID
              </div>
              <div className="flex items-center gap-2 text-zinc-950 font-bold uppercase text-sm">
                <CheckCircle2 className="w-5 h-5" /> Hall of Fame Entry
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-[400px] aspect-[1.414/1] bg-zinc-900 shadow-2xl rounded-sm overflow-hidden border border-zinc-800 group">
            <GeneratedImage 
              prompt='ultra detailed adventure expedition certificate design for "Mindanao Looperz", black and orange color scheme, mountain and loop road logo, vintage travel map texture background, compass and exploration icons, rugged outdoor aesthetic, backpacker and motorcycle adventure theme, bold modern typography, badge that says "Mindanao Loop Finisher", cinematic lighting, premium adventure brand design, highly detailed, 8k, professional travel achievement certificate'
              alt="Mindanao Looperz Finisher Certificate"
              fallbackImage="https://picsum.photos/seed/looperz-certificate/800/565"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent flex items-end p-4">
              <div className="text-left">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Official Document</span>
                <p className="text-white text-xs font-medium">Mindanao Loop Finisher Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight">Adventure Collection</h2>
          <div className="flex gap-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <span className="text-orange-500 cursor-pointer">All</span>
            <span className="hover:text-white cursor-pointer transition-colors">Apparel</span>
            <span className="hover:text-white cursor-pointer transition-colors">Equipment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gearItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden mb-6 bg-zinc-900 border border-zinc-800">
                <GeneratedImage 
                  prompt={item.prompt}
                  alt={item.name}
                  fallbackImage={item.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-2 py-1">
                    {item.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-zinc-950 px-6 py-3 font-bold uppercase text-xs tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em] mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <span className="text-lg font-mono font-bold text-white">{item.price}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-zinc-950 border border-zinc-800 text-center rounded-sm">
          <ShieldCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Quality Guaranteed</h3>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            All Mindanao Looperz gear is built to withstand the elements. We use high-performance materials that provide comfort and durability for long-distance riding and hiking.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <Star className="w-4 h-4 text-orange-500" /> Premium Materials
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <Star className="w-4 h-4 text-orange-500" /> Rider Tested
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <Star className="w-4 h-4 text-orange-500" /> Nationwide Shipping
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
