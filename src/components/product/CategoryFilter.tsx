import { motion } from "framer-motion";
import {
  productCategories,
  type ProductCategoryValue,
} from "../../config/products";

interface CategoryFilterProps {
  active: ProductCategoryValue;
  onChange: (value: ProductCategoryValue) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {productCategories.map((cat) => {
        const isActive = active === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={`relative px-5 py-2.5 text-sm font-display font-medium tracking-wide transition-colors duration-300 ${
              isActive
                ? "text-cream"
                : "text-charcoal/60 hover:text-charcoal"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="category-pill"
                className="absolute inset-0 bg-charcoal"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
