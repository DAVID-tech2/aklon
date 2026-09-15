import { ArrowRight } from 'lucide-react';
import { eventTypes } from '@/data/packages';
import SectionHeading from '@/components/common/SectionHeading';
import SmartImage from '@/components/common/SmartImage';
import { useReveal } from '@/hooks/useReveal';

export default function EventTypes() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-14">
      <SectionHeading
        eyebrow="Events We Cater"
        title="For Every Occasion"
        subtitle="Whatever you're celebrating, we bring the food, drinks and setup."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {eventTypes.map((evt, i) => (
          <EventTypeCard key={evt.id} evt={evt} index={i} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => scrollTo('#enquiry')}
          className="btn-primary"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function EventTypeCard({
  evt,
  index,
}: {
  evt: (typeof eventTypes)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      onClick={() =>
        document
          .querySelector('#enquiry')
          ?.scrollIntoView({ behavior: 'smooth' })
      }
      className={`group relative overflow-hidden rounded-2xl text-left ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="aspect-[5/4] overflow-hidden rounded-2xl">
        <SmartImage
          src={evt.image}
          alt={evt.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-stone-900/85 via-stone-900/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-display text-lg font-bold text-white">
          {evt.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-xs text-stone-200">
          {evt.description}
        </p>
      </div>
    </button>
  );
}
