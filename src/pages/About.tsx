import { motion } from 'motion/react';
import { useSiteContent } from '../context/SiteContentContext';

export default function About() {
  const { content } = useSiteContent();

  return (
    <div className="bg-zinc-950 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-white mb-6">
              About <br/> <span className="text-gradient">DISCO BEST</span>
            </h1>
            
            <div className="h-1 w-20 bg-purple-500 mb-8" />

            <div className="space-y-6 text-zinc-300 text-lg font-light leading-relaxed">
              <p>{content.about.paragraph1}</p>
              <p>{content.about.paragraph2}</p>
              <p>{content.about.paragraph3}</p>
            </div>

            <div className="mt-12 bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
               <h3 className="text-xl font-display uppercase text-white mb-3">Our Mission</h3>
               <p className="text-zinc-400">
                 {content.about.mission}
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-cyan-400/20 rounded-[2rem] blur-2xl" />
            <img 
              src="https://images.unsplash.com/photo-1470229722913-7c090be5c52c?w=900&q=80" 
              alt="DJ Setup with mixer" 
              className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl z-10"
            />
            {/* Design detail */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 px-8 py-6 rounded-2xl z-20 shadow-xl hidden sm:block">
              <div className="text-4xl font-display text-cyan-400">10+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-zinc-400">Years Experience</div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
