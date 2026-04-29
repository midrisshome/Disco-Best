import { MessageCircle } from 'lucide-react';
import { useSiteContent } from '../../context/SiteContentContext';

export function FloatingWhatsApp() {
  const { content } = useSiteContent();

  const phoneNum = content.contact.phone1.replace(/\s|[+]/g, '');

  return (
    <a
      href={`https://wa.me/${phoneNum}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group flex items-center justify-center glow-green"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
