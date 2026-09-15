import { ArrowRight, CalendarHeart, MessageCircle } from 'lucide-react';
import { openWhatsApp, generalEnquiryMessage } from '@/utils/whatsapp';
import { useReveal } from '@/hooks/useReveal';

const heroImage =
  'https://images.pexels.com/photos/28736727/pexels-photo-28736727.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  const { ref, visible } = useReveal();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chef serving traditional dishes at an elegant buffet"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-20 pb-16 sm:px-6 lg:px-8 ${
          visible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-2xl">

          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200 backdrop-blur-sm ring-1 ring-white/20">
            Food · Juices · Event Catering
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Delicious Food. Beautiful Events.
            <span className="block text-amber-300">Unforgettable Moments.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
            From freshly prepared meals and natural juices to full event
            catering — Mapetit Lusaniya brings flavour and warmth to all
            occasions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => scrollTo('#menu')}
              className="btn-primary"
            >
              Explore Our Menu
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo('#catering')}
              className="btn-secondary !bg-white/10 !text-white !ring-white/30 hover:!bg-white/20"
            >
              <CalendarHeart className="h-4 w-4" />
              Plan Your Event
            </button>
            <button
              onClick={() => openWhatsApp(generalEnquiryMessage())}
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
