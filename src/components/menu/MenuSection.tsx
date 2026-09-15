import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, SearchX } from 'lucide-react';
import { products } from '@/data/products';
import { menuCategories, type MenuCategory } from '@/data/categories';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/menu/ProductCard';
import ProductDetailsModal from '@/components/menu/ProductDetailsModal';
import type { Product } from '@/data/products';

type SortOption = 'featured' | 'price-asc' | 'price-desc';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.available);

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'featured':
      default:
        result = [...result].sort(
          (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
        );
        break;
    }

    return result;
  }, [activeCategory, search, sort]);

  return (
    <section id="menu" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Menu"
          title="Browse &amp; Order"
          subtitle="Sample menu items shown here — prices and offerings will be updated with the official Mapetit menu."
        />

        {/* Search + sort */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for food, juice, snacks..."
              className="input-field !pl-11"
              aria-label="Search products"
            />
          </div>
          <div className="relative">
            <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="input-field appearance-none !pl-11 pr-10"
              aria-label="Sort products"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-stone-50 py-16 text-center">
            <SearchX className="h-12 w-12 text-stone-300" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-bold text-stone-700">
              No items found
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Try a different search or category.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('All');
              }}
              className="btn-secondary mt-5"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
