import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  type Product,
  getStartingPrice,
  availabilityLabels,
} from "../../config/products";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
}

export default function ProductCard({
  product,
  onSelect,
  index,
}: ProductCardProps) {
  const startingPrice = getStartingPrice(product);
  const modelCount = product.variants.length;

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onSelect(product)}
      className="group relative flex flex-col text-left bg-cream-light border border-charcoal/8 overflow-hidden hover:border-flw-green/30 transition-all duration-300"
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <ProductImage
            imageRef={product.imageRef}
            brand={product.brand}
            name={product.name}
          />
        </div>

        {/* Availability badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`inline-block px-3.5 py-2 text-[11px] uppercase tracking-widest font-display whitespace-nowrap ${
              product.availability === "available"
                ? "bg-cream/90 text-charcoal/70"
                : "bg-charcoal/90 text-cream/80"
            }`}
          >
            {availabilityLabels[product.availability]}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 sm:p-7 flex flex-col gap-2">
        <p className="text-[11px] uppercase tracking-widest text-charcoal/40 font-display">
          {product.brand}
        </p>
        <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-charcoal">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-charcoal/8">
          <div>
            {startingPrice !== null ? (
              <p className="text-sm font-display font-medium text-charcoal">
                From R{startingPrice.toLocaleString()}
              </p>
            ) : (
              <p className="text-sm font-display font-medium text-charcoal/50">
                Price on request
              </p>
            )}
            <p className="text-xs text-charcoal/40 mt-1">
              {modelCount} {modelCount === 1 ? "model" : "models"} available
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-display font-medium text-charcoal/50 group-hover:text-flw-green transition-colors duration-300 whitespace-nowrap">
            View Options
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
