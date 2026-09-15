import { useEffect } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatUGX } from '@/utils/format';
import { openWhatsApp, orderMessage } from '@/utils/whatsapp';
import SmartImage from '@/components/common/SmartImage';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    totalQuantity,
  } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    const cartItems = items.map((i) => ({
      name: i.product.name,
      quantity: i.quantity,
      price: i.product.price,
    }));
    openWhatsApp(orderMessage(cartItems, subtotal));
  };

  const scrollToMenu = () => {
    closeCart();
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-stone-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Your order"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-amber-600" />
            <h2 className="font-display text-lg font-bold text-stone-900">
              Your Order
            </h2>
            {totalQuantity > 0 && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                {totalQuantity}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-100"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-stone-100">
              <ShoppingBag className="h-10 w-10 text-stone-300" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-stone-700">
              Your order is currently empty
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Browse the menu and add your favourite items.
            </p>
            <button onClick={scrollToMenu} className="btn-primary mt-6">
              Explore Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 rounded-2xl bg-stone-50 p-3"
                >
                  <SmartImage
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-stone-900">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-stone-400 transition-colors hover:text-red-500"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-xs text-stone-500">
                      {formatUGX(item.product.price)} each
                    </span>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-stone-600 ring-1 ring-stone-200 transition-colors hover:bg-stone-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-stone-600 ring-1 ring-stone-200 transition-colors hover:bg-stone-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-amber-700">
                        {formatUGX(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="mx-auto mt-2 flex items-center gap-1.5 text-xs font-medium text-stone-400 transition-colors hover:text-red-500"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear all
              </button>
            </div>

            {/* Footer */}
            <div className="border-t border-stone-100 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-500">
                  Estimated Total
                </span>
                <span className="font-display text-2xl font-bold text-stone-900">
                  {formatUGX(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-stone-400">
                Final price confirmed via WhatsApp. No online payment required.
              </p>
              <button
                onClick={handleCheckout}
                className="btn-whatsapp mt-4 w-full"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
