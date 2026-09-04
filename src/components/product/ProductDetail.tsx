import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ShoppingBag } from "lucide-react";
import {
  type Product,
  type StorageOption,
  getModels,
  getStorageForModel,
  availabilityLabels,
} from "../../config/products";
import { useCart } from "../../context/CartContext";
import ProductImage from "./ProductImage";

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addItem } = useCart();
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const models = getModels(product);
      const firstModel = models[0] ?? "";
      setSelectedModel(firstModel);
      const storage = getStorageForModel(product, firstModel);
      setSelectedStorage(storage[0]?.label ?? "");
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  const storageOptions: StorageOption[] = useMemo(() => {
    if (!product || !selectedModel) return [];
    return getStorageForModel(product, selectedModel);
  }, [product, selectedModel]);

  const currentPrice = useMemo(() => {
    if (!product) return null;
    const storage = storageOptions.find((s) => s.label === selectedStorage);
    return storage ? storage.price : null;
  }, [product, storageOptions, selectedStorage]);

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    const storage = getStorageForModel(product!, model);
    setSelectedStorage(storage[0]?.label ?? "");
    setAdded(false);
  };

  const handleAddToCart = () => {
    if (!product || !selectedModel || !selectedStorage) return;
    addItem({
      productId: product.id,
      productName: product.name,
      brand: product.brand,
      model: selectedModel,
      storage: selectedStorage,
      price: currentPrice,
      imageRef: product.imageRef,
    });
    setAdded(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: "100%", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full sm:max-w-4xl max-h-[92svh] overflow-y-auto bg-cream sm:mx-4 rounded-t-2xl sm:rounded-none"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-cream/80 backdrop-blur-sm text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-200"
              aria-label="Close product details"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square sm:aspect-auto sm:min-h-[500px]">
                <ProductImage
                  imageRef={product.imageRef}
                  brand={product.brand}
                  name={product.name}
                />
              </div>

              {/* Configuration */}
              <div className="p-6 sm:p-10 flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-display">
                  {product.brand}
                </p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold font-display tracking-tight text-charcoal">
                  {product.name}
                </h2>

                <span
                  className={`mt-3 inline-flex self-start px-3 py-1 text-[10px] uppercase tracking-widest font-display ${
                    product.availability === "available"
                      ? "bg-cream-dark text-charcoal/60"
                      : "bg-charcoal text-cream/80"
                  }`}
                >
                  {availabilityLabels[product.availability]}
                </span>

                <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
                  {product.description}
                </p>

                {/* Model selection */}
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-display mb-3">
                    Select Model
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {getModels(product).map((model) => (
                      <button
                        key={model}
                        onClick={() => handleModelChange(model)}
                        className={`relative px-4 py-3 text-sm font-display font-medium tracking-wide border transition-all duration-300 min-h-[48px] ${
                          selectedModel === model
                            ? "border-flw-green bg-flw-green text-cream"
                            : "border-charcoal/15 text-charcoal/70 hover:border-flw-green/40"
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Storage selection */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-display mb-3">
                    Select Storage
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {storageOptions.map((storage) => (
                      <button
                        key={storage.label}
                        onClick={() => {
                          setSelectedStorage(storage.label);
                          setAdded(false);
                        }}
                        className={`relative px-4 py-3 text-sm font-display font-medium tracking-wide border transition-all duration-300 min-h-[48px] ${
                          selectedStorage === storage.label
                            ? "border-flw-green bg-flw-green text-cream"
                            : "border-charcoal/15 text-charcoal/70 hover:border-flw-green/40"
                        }`}
                      >
                        {storage.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price + Add to Cart */}
                <div className="mt-auto pt-8 border-t border-charcoal/10">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-charcoal/40 font-display">
                        Price
                      </p>
                      {currentPrice !== null ? (
                        <p className="mt-1 text-3xl font-bold font-display tracking-tight text-charcoal">
                          R{currentPrice.toLocaleString()}
                        </p>
                      ) : (
                        <p className="mt-1 text-2xl font-bold font-display tracking-tight text-charcoal/50">
                          Price on request
                        </p>
                      )}
                    </div>
                    {selectedModel && selectedStorage && (
                      <div className="flex items-center gap-1.5 text-xs text-flw-green font-display">
                        <Check size={14} strokeWidth={2} />
                        Configuration selected
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedModel || !selectedStorage}
                    className={`w-full flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium tracking-wide font-display transition-all duration-300 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${
                      added
                        ? "bg-flw-green-dark text-cream"
                        : "bg-flw-green text-cream hover:bg-flw-green-light border border-flw-green"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check size={18} strokeWidth={2} />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={18} strokeWidth={1.5} />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export default ProductDetail