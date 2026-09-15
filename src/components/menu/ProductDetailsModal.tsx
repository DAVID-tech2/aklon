import { useState, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatUGX } from '@/utils/format';
import { useCart } from '@/context/CartContext';
import SmartImage from '@/components/common/SmartImage';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailsModal({
  product,
  onClose,
}: ProductDetailsModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  // Lock body scroll & close on Escape
  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleAdd = () => {
    addItem(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl animate-fade-up overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-stone-600 shadow-md backdrop-blur-sm transition-colors hover:bg-white hover:text-stone-900"
          aria-label="Close details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid sm:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square sm:aspect-auto sm:h-full">
            <SmartImage
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-stone-700 backdrop-blur-sm">
              {product.category}
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col p-5 sm:p-6">
            <h2 className="font-display text-2xl font-bold text-stone-900">
              {product.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">
              {product.description || 'Description coming soon.'}
            </p>

            <p className="mt-4 text-2xl font-bold text-amber-700">
              {formatUGX(product.price)}
            </p>

            {!product.available && (
              <p className="mt-2 rounded-lg bg-stone-100 px-3 py-2 text-xs font-medium text-stone-500">
                This item is currently unavailable.
              </p>
            )}

            {/* Quantity selector */}
            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Quantity
              </label>
              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-colors hover:bg-stone-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-lg font-bold text-stone-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-colors hover:bg-stone-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add button */}
            <button
              onClick={handleAdd}
              disabled={!product.available}
              className="btn-primary mt-6 w-full"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Order · {formatUGX(product.price * quantity)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
