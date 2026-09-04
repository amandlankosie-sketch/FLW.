import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  products,
  type Product,
  type ProductCategoryValue,
} from "../../config/products";
import ProductCard from "../product/ProductCard";
import ProductDetail from "../product/ProductDetail";
import CategoryFilter from "../product/CategoryFilter";

export default function Shop() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategoryValue>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.brand === activeCategory);
  }, [activeCategory]);

  return (
    <section id="shop" className="bg-cream pt-20 sm:pt-28 pb-20 sm:pb-28">
      <div className="flw-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-charcoal/40 font-display">
            Shop
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-display tracking-tight text-charcoal">
            Discover What's Available
          </h2>
          <p className="mt-4 text-base text-charcoal/60 max-w-lg">
            Browse selected products currently available through FLW. Choose
            your model and storage to see available options and pricing.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
              index={i}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-charcoal/40 py-16 font-display">
            No products in this category yet.
          </p>
        )}
      </div>

      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
