import { Plus, Search } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatUGX } from '@/utils/format';
import { useCart } from '@/context/CartContext';
import SmartImage from '@/components/common/SmartImage';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="card group overflow-hidden hover:shadow-xl hover:shadow-stone-200/60 hover:ring-stone-300/60">
      {/* Image */}
      <button
        onClick={() => onQuickView?.(product)}
        className="relative block aspect-[4/3] w-full overflow-hidden"
        aria-label={`View ${product.name} details`}
      >
        <SmartImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-stone-700 backdrop-blur-sm">
          {product.category}
        </span>
        {!product.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-900/60">
            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-stone-700">
              Currently Unavailable
            </span>
          </div>
        )}
      </button>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-stone-900">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-stone-500">
          {product.description || 'Description coming soon.'}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-amber-700">
            {formatUGX(product.price)}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickView?.(product)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
              aria-label={`Quick view ${product.name}`}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => addItem(product)}
              disabled={!product.available}
              className="btn-primary !px-4 !py-2 !text-xs"
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
