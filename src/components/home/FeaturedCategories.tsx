import { ArrowRight } from 'lucide-react';
import { featuredCategories } from '@/data/categories';
import SectionHeading from '@/components/common/SectionHeading';
import SmartImage from '@/components/common/SmartImage';
import { useReveal } from '@/hooks/useReveal';

export default function FeaturedCategories() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (id: string) => {
    if (id === 'catering' || id === 'events') {
      scrollTo('#catering');
    } else {
      scrollTo('#menu');
    }
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Browse by Category"
          subtitle="From everyday meals to full event catering — explore everything Mapetit has to offer."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {featuredCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <CategoryCard
                key={cat.id}
                cat={cat}
                icon={<Icon className="h-6 w-6" />}
                index={i}
                onClick={() => handleClick(cat.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  cat,
  icon,
  index,
  onClick,
}: {
  cat: (typeof featuredCategories)[number];
  icon: React.ReactNode;
  index: number;
  onClick: () => void;
}) {
  const { ref, visible } = useReveal<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl text-left ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <SmartImage
          src={cat.image}
          alt={cat.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-stone-900/85 via-stone-900/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/90 text-white shadow-lg">
          {icon}
        </span>
        <h3 className="font-display text-lg font-bold text-white">
          {cat.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-xs text-stone-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {cat.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
          Explore <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </button>
  );
}
