import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import ProductImage from "../product/ProductImage";
import Button from "../ui/Button";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    totalItems,
  } = useCart();

  const handleShopClick = () => {
    closeCart();
    const el = document.querySelector("#shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex justify-end"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="relative w-full max-w-md h-full bg-cream flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-display font-bold tracking-tight text-charcoal">
                  Your Cart
                </h2>
                {totalItems > 0 && (
                  <span className="text-sm text-charcoal/40 font-display">
                    ({totalItems})
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors duration-200"
                aria-label="Close cart"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Body */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center border border-charcoal/15 mb-6">
                  <ShoppingBag size={28} strokeWidth={1.5} className="text-charcoal/30" />
                </div>
                <h3 className="text-xl font-display font-bold tracking-tight text-charcoal">
                  Your cart is waiting.
                </h3>
                <p className="mt-3 text-sm text-charcoal/50 max-w-xs leading-relaxed">
                  Explore our products and add something you'd like FLW. to source.
                </p>
                <Button
                  variant="green"
                  className="mt-8"
                  onClick={handleShopClick}
                >
                  Shop Products
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {items.map((item) => (
                    <div
                      key={item.key}
                      className="flex gap-4 py-4 border-b border-charcoal/8"
                    >
                      {/* Image */}
                      <div className="w-20 h-24 flex-shrink-0 overflow-hidden">
                        <ProductImage
                          imageRef={item.imageRef}
                          brand={item.brand}
                          name={item.productName}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 flex flex-col min-w-0">
                        <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-display">
                          {item.brand}
                        </p>
                        <h3 className="text-sm font-display font-semibold text-charcoal tracking-tight">
                          {item.productName}
                        </h3>
                        <p className="text-xs text-charcoal/50 mt-0.5">
                          {item.model} — {item.storage}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-3">
                          {/* Quantity controls */}
                          <div className="flex items-center border border-charcoal/15">
                            <button
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className="w-9 h-9 flex items-center justify-center text-charcoal/60 hover:bg-charcoal/5 transition-colors duration-200"
                              aria-label={`Decrease quantity of ${item.productName}`}
                            >
                              <Minus size={14} strokeWidth={2} />
                            </button>
                            <span className="w-9 text-center text-sm font-display font-medium text-charcoal">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className="w-9 h-9 flex items-center justify-center text-charcoal/60 hover:bg-charcoal/5 transition-colors duration-200"
                              aria-label={`Increase quantity of ${item.productName}`}
                            >
                              <Plus size={14} strokeWidth={2} />
                            </button>
                          </div>

                          {/* Price + remove */}
                          <div className="flex flex-col items-end gap-1.5">
                            {item.price !== null ? (
                              <p className="text-sm font-display font-semibold text-charcoal">
                                R{(item.price * item.quantity).toLocaleString()}
                              </p>
                            ) : (
                              <p className="text-xs font-display font-medium text-charcoal/50">
                                Price on request
                              </p>
                            )}
                            <button
                              onClick={() => removeItem(item.key)}
                              className="text-charcoal/30 hover:text-flw-green transition-colors duration-200"
                              aria-label={`Remove ${item.productName} from cart`}
                            >
                              <Trash2 size={15} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-5 border-t border-charcoal/10 bg-cream-light flex-shrink-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm uppercase tracking-widest text-charcoal/40 font-display">
                      Subtotal
                    </span>
                    {subtotal > 0 ? (
                      <span className="text-xl font-display font-bold text-charcoal">
                        R{subtotal.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-sm font-display font-medium text-charcoal/50">
                        Price on request
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-charcoal/40 mb-4 leading-relaxed">
                    Delivery charges and final totals will be calculated at checkout.
                  </p>
                  <Button variant="secondary" className="w-full" onClick={closeCart}>
                    Continue Shopping
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
