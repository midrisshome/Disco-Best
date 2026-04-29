import { Phone, Mail, MapPinned } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export default function Contact() {
  const { content } = useSiteContent();

  return (
    <div className="bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-display uppercase tracking-tight text-white mb-6">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Our team is ready to provide you with the best sound solutions. Reach out via phone, email, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
               <Phone className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-display uppercase tracking-wider text-white mb-4">Call Us</h3>
            <div className="space-y-2 text-zinc-300">
               <p><a href={`tel:${content.contact.phone1.replace(/\s/g, '')}`} className="hover:text-cyan-400 transition-colors">{content.contact.phone1}</a></p>
               <p><a href={`tel:${content.contact.phone2.replace(/\s/g, '')}`} className="hover:text-cyan-400 transition-colors">{content.contact.phone2}</a></p>
               <p><a href={`tel:${content.contact.phone3.replace(/\s/g, '')}`} className="hover:text-cyan-400 transition-colors">{content.contact.phone3}</a></p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center hover:border-green-500/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
               <Mail className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-display uppercase tracking-wider text-white mb-4">Email Us</h3>
            <div className="space-y-2 text-zinc-300">
               <p><a href={`mailto:${content.contact.email}`} className="hover:text-cyan-400 transition-colors break-all">{content.contact.email}</a></p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center hover:border-cyan-500/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
               <MapPinned className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-display uppercase tracking-wider text-white mb-4">Location</h3>
            <div className="space-y-2 text-zinc-300">
               <p>{content.contact.location1}</p>
               <p>{content.contact.location2}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
