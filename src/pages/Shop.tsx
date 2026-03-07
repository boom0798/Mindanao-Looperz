import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const vlogs = [
  {
    id: 1,
    title: 'Conquering the Bukidnon Mountains',
    description: 'A 3-day ride through the cool highlands of Bukidnon. Epic drone shots and twisty roads.',
    thumbnail: 'https://picsum.photos/seed/vlog1/800/450',
    duration: '15:24',
  },
  {
    id: 2,
    title: 'Surigao Coastal Ride - Pacific Views',
    description: 'Riding along the eastern seaboard of Mindanao. The views of the Pacific Ocean are unmatched.',
    thumbnail: 'https://picsum.photos/seed/vlog2/800/450',
    duration: '22:10',
  },
  {
    id: 3,
    title: 'Davao to Mati - The Sleeping Dinosaur',
    description: 'A weekend ride to Mati City. We check out the famous Sleeping Dinosaur and Dahican Beach.',
    thumbnail: 'https://picsum.photos/seed/vlog3/800/450',
    duration: '18:45',
  },
  {
    id: 4,
    title: 'Full Mindanao Loop - Part 1',
    description: 'Starting our epic 14-day journey around Mindanao. Day 1-3 covers CDO to Surigao.',
    thumbnail: 'https://picsum.photos/seed/vlog4/800/450',
    duration: '35:12',
  },
  {
    id: 5,
    title: 'Zamboanga Peninsula Adventure',
    description: 'Exploring the western side of Mindanao. Rich culture, amazing food, and challenging roads.',
    thumbnail: 'https://picsum.photos/seed/vlog5/800/450',
    duration: '28:30',
  },
  {
    id: 6,
    title: 'BuDa Route 955 - Best Roads in PH?',
    description: 'Is this the best riding road in the Philippines? We test our skills on Route 955.',
    thumbnail: 'https://picsum.photos/seed/vlog6/800/450',
    duration: '12:15',
  },
];

export default function Vlogs() {
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
            Ride <span className="text-orange-500">Vlogs</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Experience the Mindanao Loop through the lens of our community. Watch epic rides, route guides, and travel documentaries.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogs.map((vlog, idx) => (
            <motion.div 
              key={vlog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden mb-4 border border-zinc-800 bg-zinc-900">
                <img 
                  src={vlog.thumbnail} 
                  alt={vlog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-xs font-mono text-white">
                  {vlog.duration}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {vlog.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">
                  {vlog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all uppercase tracking-wider font-semibold text-sm">
            Load More Videos
          </button>
        </div>
      </section>
    </div>
  );
}
