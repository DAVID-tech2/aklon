import { ArrowRight, CalendarHeart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const ctaImage =
  'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function CateringCTA() {
  const { ref, visible } = useReveal();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl ${
            visible ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={ctaImage}
              alt="Elegant wedding reception table setup"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/40" />
          </div>

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <div className="max-w-lg">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200 ring-1 ring-amber-400/30">
                Event Catering
              </span>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Planning an Event? Let Us Handle the Food.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-200">
                Weddings, birthdays, corporate events and more — we provide
                delicious food, fresh juices and full setup so you can focus on
                enjoying your day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo('#catering')}
                  className="btn-primary"
                >
                  Explore Catering
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollTo('#enquiry')}
                  className="btn-secondary !bg-white/10 !text-white !ring-white/30 hover:!bg-white/20"
                >
                  <CalendarHeart className="h-4 w-4" />
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
