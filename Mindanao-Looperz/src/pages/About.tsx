import { motion } from 'motion/react';
import { Target, Users, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Our <span className="text-orange-500">Story</span>
            </h1>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                The Mindanao Loop started as a simple idea among a group of passionate riders: to explore the uncharted territories of our own backyard. What began as weekend rides soon evolved into a mission to circumnavigate the entire island.
              </p>
              <p>
                We realized that Mindanao is often misunderstood. Beyond the headlines lies a land of unparalleled beauty—majestic mountains, pristine coastlines, and diverse cultures waiting to be discovered.
              </p>
              <p>
                Today, Mindanao Looperz is more than just a route. It's a community of adventure seekers, storytellers, and proud Filipinos dedicated to showcasing the true essence of the south.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-zinc-800 bg-zinc-900">
              <img 
                src="https://picsum.photos/seed/about-riders/800/1000?blur=1" 
                alt="Riders on a mountain pass" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange-500 p-6 hidden md:flex flex-col justify-center">
              <span className="text-4xl font-black text-white mb-2">10+</span>
              <span className="text-sm font-bold uppercase tracking-wider text-orange-950">Years of Riding</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-900 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Our Mission</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Why we ride and what we aim to achieve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Promote Tourism',
                desc: 'To highlight Mindanao as a premier destination for motorcycle tourism in Southeast Asia, boosting local economies along the routes.'
              },
              {
                icon: Target,
                title: 'Showcase Landscapes',
                desc: 'To capture and share the breathtaking beauty of Filipino landscapes, from the highlands of Bukidnon to the beaches of Surigao.'
              },
              {
                icon: Users,
                title: 'Build Community',
                desc: 'To foster a strong, responsible, and inclusive community of riders who share a passion for adventure and respect for local cultures.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 p-8 text-center hover:border-orange-500 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <item.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
