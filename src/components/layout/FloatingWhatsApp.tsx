import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp, generalEnquiryMessage } from '@/utils/whatsapp';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => openWhatsApp(generalEnquiryMessage())}
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/30 transition-all hover:bg-[#1ebe5d] active:scale-95 sm:bottom-6 sm:right-6 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-16 opacity-0'
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="white" fillOpacity={0.15} />
      <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-green-500" />
      </span>
    </button>
  );
}
