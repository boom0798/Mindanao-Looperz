import { motion } from 'motion/react';
import { Map, Calendar, Mountain, Sun } from 'lucide-react';

const routePoints = [
  { id: 1, name: 'Davao City', x: 55, y: 75, tx: 0, ty: 4, anchor: 'middle' },
  { id: 2, name: "Uraya's Peak, Talaingod", x: 48, y: 65, tx: -2, ty: 1, anchor: 'end' },
  { id: 3, name: 'Communal Ranch Bukidnon', x: 40, y: 55, tx: -2, ty: 1, anchor: 'end' },
  { id: 4, name: 'Mt. Kulago', x: 35, y: 45, tx: -2, ty: 1, anchor: 'end' },
  { id: 5, name: 'COD white Rafting', x: 30, y: 25, tx: 0, ty: -3, anchor: 'middle' },
  { id: 6, name: 'Tinuy-an Falls', x: 75, y: 75, tx: 2, ty: 1, anchor: 'start' },
  { id: 7, name: 'Enchanted River', x: 82, y: 65, tx: 2, ty: 1, anchor: 'start' },
  { id: 8, name: 'Britania Island', x: 85, y: 50, tx: 2, ty: 1, anchor: 'start' },
  { id: 9, name: 'Surigao Port', x: 75, y: 15, tx: 0, ty: -3, anchor: 'middle' },
];

export default function TheLoop() {
  return (
    <div className="w-full pt-24 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            The <span className="text-orange-500">Mindanao Loop</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            The Mindanao Loop is the ultimate test of endurance, skill, and spirit. Covering the vast and diverse landscapes of the Philippines' second-largest island, it's a journey that takes you through bustling cities, serene coastal towns, and challenging mountain passes.
          </p>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="bg-zinc-900 py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">The Concept</h2>
              <div className="space-y-6 text-zinc-400">
                <p>
                  There is no single "official" route for the Mindanao Loop. Instead, it's a concept: circumnavigating the island or exploring its major regions in one continuous journey.
                </p>
                <p>
                  Riders typically start in major hubs like Davao City, Cagayan de Oro, or General Santos, and chart a course that hugs the coastline or cuts through the mountainous interior.
                </p>
                <p>
                  Whether you take the eastern seaboard facing the Pacific, the northern coastal highway, or the winding roads of Bukidnon, every route offers a unique adventure.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] bg-zinc-950 border border-zinc-800 p-4 flex items-center justify-center overflow-hidden group rounded-xl"
            >
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map-texture/800/800')] opacity-10 mix-blend-overlay" />
              
              <svg className="relative z-10 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Abstract Mindanao Shape */}
                <path 
                  d="M 70 10 C 80 10, 85 20, 80 30 C 90 40, 95 50, 90 60 C 85 75, 80 85, 65 85 C 55 85, 45 90, 35 85 C 20 80, 10 70, 15 60 C 5 55, 0 45, 10 40 C 20 35, 30 45, 40 45 C 45 35, 35 25, 40 15 C 50 10, 60 5, 70 10 Z" 
                  fill="#18181b" 
                  stroke="#27272a" 
                  strokeWidth="0.5" 
                />
                
                {/* Route Line */}
                <motion.path
                  d={`M ${routePoints.map(p => `${p.x} ${p.y}`).join(' L ')}`}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Route Points */}
                {routePoints.map((point, idx) => (
                  <g key={point.id}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="1"
                      fill="#f97316"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2, duration: 0.3 }}
                    />
                    <motion.text
                      x={point.x + point.tx}
                      y={point.y + point.ty}
                      fontSize="2.5"
                      fill="#d4d4d8"
                      textAnchor={point.anchor as "start" | "middle" | "end"}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.2, duration: 0.3 }}
                      className="font-sans font-medium drop-shadow-md"
                    >
                      {point.id}. {point.name}
                    </motion.text>
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tight">By The Numbers</h2>
          <p className="text-zinc-400 mt-2">What to expect on a full loop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Map, label: 'Total Distance', value: '842 KM', desc: 'The core loop covering major Mindanao hubs.' },
            { icon: Calendar, label: 'Estimated Time', value: '5-7 Days', desc: 'A balanced pace for the full expedition.' },
            { icon: Mountain, label: 'Road Conditions', value: '90% Paved', desc: 'Mostly smooth highways with minimal rough patches.' },
            { icon: Sun, label: 'Best Season', value: 'Dec - May', desc: 'Top picks: February, March, and April.' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 text-center"
            >
              <stat.icon className="w-10 h-10 text-orange-500 mx-auto mb-6" />
              <h3 className="text-4xl font-black tracking-tighter mb-2">{stat.value}</h3>
              <p className="text-white font-bold uppercase tracking-wider text-sm mb-3">{stat.label}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
