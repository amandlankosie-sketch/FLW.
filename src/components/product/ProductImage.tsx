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
      <div className="relative z-10 text-center px-6">
        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-charcoal text-cream">
          <span className="text-base font-bold font-display">
            {isApple ? "A" : "S"}
          </span>
        </div>
        <p className="text-[11px] uppercase tracking-widest text-charcoal/30 font-display mb-1.5">
          {brand}
        </p>
        <p className="text-sm font-display font-semibold text-charcoal/50 tracking-tight">
          {name}
        </p>
        <p className="text-[11px] text-charcoal/25 mt-2.5 font-display">
          {imageRef}
        </p>
      </div>
    </div>
  );
}
