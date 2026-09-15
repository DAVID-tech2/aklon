import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/menu/ProductCard';
import { useReveal } from '@/hooks/useReveal';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 6);
  const { ref, visible } = useReveal();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            center={false}
            eyebrow="Customer Favourites"
            title="Featured on the Menu"
            subtitle="A taste of what's available — sample items shown here. Full menu below."
          />
          <button
            onClick={() => scrollTo('#menu')}
            className="btn-secondary shrink-0"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((product, i) => (
            <div
              key={product.id}
              className={visible ? 'animate-fade-up' : 'opacity-0'}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
