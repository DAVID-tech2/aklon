import { Check, Star, ArrowRight } from 'lucide-react';
import type { CateringPackage } from '@/data/packages';
import SmartImage from '@/components/common/SmartImage';
import { useReveal } from '@/hooks/useReveal';

interface PackageCardProps {
  pkg: CateringPackage;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const { ref, visible } = useReveal();

  const scrollToEnquiry = () => {
    document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article
      ref={ref}
      className={`card relative flex flex-col overflow-hidden hover:shadow-xl hover:shadow-stone-200/60 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      } ${pkg.popular ? 'ring-2 ring-amber-500' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {pkg.popular && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-amber-600 px-3 py-1 text-[11px] font-bold text-white shadow-md">
          <Star className="h-3 w-3 fill-white" />
          Popular
        </span>
      )}

      <div className="aspect-[16/10] overflow-hidden">
        <SmartImage
          src={pkg.image}
          alt={pkg.tagline}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
          {pkg.tagline}
        </span>
        <h3 className="mt-1 font-display text-xl font-bold text-stone-900">
          {pkg.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          {pkg.description}
        </p>

        <ul className="mt-4 space-y-2">
          {pkg.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-stone-600"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-amber-700">
            {pkg.priceLabel}
          </span>
        </div>
        <button
          onClick={scrollToEnquiry}
          className="btn-primary mt-3 w-full"
        >
          Request Quote
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
