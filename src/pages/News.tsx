import { motion } from 'motion/react';
import { useSiteContent } from '../context/SiteContentContext';
import { Calendar } from 'lucide-react';

export default function News() {
  const { content } = useSiteContent();

  return (
    <div className="bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-display uppercase tracking-tight text-white mb-6">
            Latest <span className="text-cyan-400">News</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Updates and announcements from DISCO BEST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors"
            >
              {item.image && (
                <div className="w-full h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-2xl font-display uppercase tracking-wider text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
