import { motion } from "framer-motion";
import { Cpu, Shirt, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../config/site";

const iconMap = {
  Cpu: Cpu,
  Shirt: Shirt,
} as const;

export default function WhatWeSource() {
  return (
    <section id="what-we-source" className="bg-cream py-20 sm:py-28">
      <div className="flw-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-charcoal/40 font-display">
            What We Source
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-display tracking-tight text-charcoal max-w-2xl">
            Categories coming soon
          </h2>
          <p className="mt-4 text-base text-charcoal/60 max-w-lg">
            A preview of what FLW. will offer. The full catalogue launches in our next phase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {siteConfig.categories.map((category, i) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative bg-cream-light border border-charcoal/8 p-8 sm:p-10 overflow-hidden cursor-default"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-flw-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-charcoal/15 group-hover:border-cream/20 transition-colors duration-500">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-charcoal group-hover:text-cream transition-colors duration-500"
                      />
                    </div>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-charcoal/30 group-hover:text-cream transition-colors duration-500"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-charcoal group-hover:text-cream transition-colors duration-500">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm text-charcoal/60 group-hover:text-cream/60 transition-colors duration-500 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <span className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-charcoal/30 group-hover:text-cream/30 transition-colors duration-500 font-display">
                  Soon
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
