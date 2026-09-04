import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import { siteConfig } from "../../config/site";

export default function ShippingPreview() {
  return (
    <section id="shipping" className="bg-cream py-20 sm:py-28">
      <div className="flw-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-charcoal/40 font-display">
              Shipping & Info
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-display tracking-tight text-charcoal">
              Estimated Delivery
            </h2>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-5xl sm:text-7xl font-bold font-display tracking-tight text-charcoal">
                {siteConfig.shipping.estimatedDelivery.split(" ")[0]}
              </span>
              <span className="text-2xl sm:text-3xl font-display font-medium text-charcoal/50">
                {siteConfig.shipping.estimatedDelivery.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <p className="mt-6 text-base text-charcoal/60 leading-relaxed max-w-md">
              {siteConfig.shipping.estimatedDeliveryDetail}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto border border-charcoal/10 bg-cream-light p-10 sm:p-14 flex flex-col justify-between overflow-hidden">
              {/* Decorative route line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
              >
                <motion.path
                  d="M 50 350 Q 200 50 350 350"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-charcoal/10"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <circle cx="50" cy="350" r="4" className="fill-flw-green" />
                <circle cx="350" cy="350" r="4" className="fill-charcoal" />
              </svg>

              <div className="relative z-10 flex justify-between text-xs font-display uppercase tracking-widest">
                <span className="text-charcoal/50">China</span>
                <span className="text-charcoal/50">South Africa</span>
              </div>

              <div className="relative z-10 flex justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-charcoal text-cream"
                >
                  <Truck size={28} strokeWidth={1.5} />
                </motion.div>
              </div>

              <div className="relative z-10 text-center">
                <p className="text-xs font-display uppercase tracking-widest text-charcoal/40">
                  From supplier to doorstep
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
