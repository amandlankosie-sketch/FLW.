import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../config/site";
import Button from "../ui/Button";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-cream"
    >
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-charcoal blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent blur-[100px]"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative flw-container w-full pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 mb-8 border border-charcoal/15 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-flw-green animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-charcoal/70 uppercase">
              Sourcing from China → South Africa
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold font-display tracking-tight leading-[1.05] text-charcoal"
          >
            See it.
            <br />
            Want it.
            <br />
            <span className="relative inline-block">
              We'll source it.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-flw-green origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-base sm:text-lg text-charcoal/60 max-w-xl leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              as="a"
              href="#shop"
              variant="primary"
              className="group"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#shop");
              }}
            >
              Shop Products
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
            <Button
              as="a"
              href="#how-it-works"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#how-it-works");
              }}
            >
              How It Works
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-display">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-charcoal/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
