import { motion } from 'motion/react';
import { useSiteContent } from '../context/SiteContentContext';

export default function Gallery() {
  const { content } = useSiteContent();

  return (
    <div className="bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-display uppercase tracking-tight text-white mb-6">
            Event <span className="text-purple-500">Gallery</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            See our equipment in action at events across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {content.gallery.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-zinc-900 border border-white/5"
            >
              <img 
                src={src} 
                alt={`Event ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
