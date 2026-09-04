/**
 * FLW. — Product Image Placeholder
 *
 * This component renders a clean, branded placeholder for each product.
 * To use real product images later:
 *   1. Add image files to src/assets/products/ (e.g. iphone-15.jpg)
 *   2. Replace the placeholder switch below with an image import map
 *   3. Render <img src={imageMap[imageRef]} /> instead of the placeholder
 *
 * The imageRef values are: iphone-13, iphone-14, iphone-15,
 * galaxy-s24, galaxy-s25, galaxy-s26
 */

interface ProductImageProps {
  imageRef: string;
  brand: string;
  name: string;
  className?: string;
}

export default function ProductImage({
  imageRef,
  brand,
  name,
  className = "",
}: ProductImageProps) {
  const isApple = brand === "Apple";

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-light to-cream-dark ${className}`}
    >
      {/* Subtle decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Brand mark */}
      <div className="relative z-10 text-center px-4">
        <div className="mx-auto mb-3 w-10 h-10 flex items-center justify-center rounded-full bg-charcoal text-cream">
          <span className="text-sm font-bold font-display">
            {isApple ? "A" : "S"}
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-charcoal/30 font-display mb-1">
          {brand}
        </p>
        <p className="text-sm font-display font-semibold text-charcoal/50 tracking-tight">
          {name}
        </p>
        <p className="text-[10px] text-charcoal/25 mt-2 font-display">
          {imageRef}
        </p>
      </div>
    </div>
  );
}
