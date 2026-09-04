import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-charcoal text-cream py-20 sm:py-28">
      <div className="flw-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-cream/40 font-display">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-display tracking-tight max-w-2xl">
            Three simple steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
          {siteConfig.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-charcoal p-8 sm:p-10 hover:bg-charcoal-light transition-colors duration-500"
            >
              <span className="text-5xl sm:text-6xl font-bold font-display text-cream/10 group-hover:text-flw-green-muted/60 transition-colors duration-500 block mb-6">
                {step.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-cream/60 leading-relaxed">
                {step.description}
              </p>

              {i < siteConfig.steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-px h-12 bg-cream/10" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-cream/40"
        >
          The full detailed process will be available soon.
        </motion.p>
      </div>
    </section>
  );
}
