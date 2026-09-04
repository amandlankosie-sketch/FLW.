import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { siteConfig } from "../../config/site";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-charcoal/10"
            : "bg-transparent"
        }`}
      >
        <nav className="flw-container h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="text-xl sm:text-2xl font-bold font-display tracking-tight text-charcoal"
          >
            {siteConfig.brand}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-flw-green transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={openCart}
              className="relative p-2 text-charcoal hover:text-flw-green transition-colors duration-200"
              aria-label={`Open cart, ${totalItems} items`}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center bg-flw-green text-cream text-[10px] font-bold font-display rounded-full">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavClick("#shop")}
              className="px-6 py-2.5 bg-flw-green text-cream text-sm font-medium font-display tracking-wide hover:bg-flw-green-light transition-all duration-300 active:scale-95"
            >
              Start Shopping
            </button>
          </div>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={openCart}
              className="relative p-2 text-charcoal"
              aria-label={`Open cart, ${totalItems} items`}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center bg-flw-green text-cream text-[10px] font-bold font-display rounded-full">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-charcoal text-cream flex flex-col md:hidden"
          >
            <div className="flw-container h-16 sm:h-20 flex items-center justify-between">
              <span className="text-xl font-bold font-display tracking-tight">
                {siteConfig.brand}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center flw-container gap-2">
              {siteConfig.navigation.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-4 text-3xl font-display font-semibold tracking-tight border-b border-cream/10 hover:text-flw-green-muted transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + siteConfig.navigation.length * 0.08, duration: 0.4 }}
                onClick={() => handleNavClick("#shop")}
                className="mt-8 py-4 bg-flw-green text-cream text-base font-display font-medium tracking-wide text-center hover:bg-flw-green-light transition-all duration-300"
              >
                Start Shopping
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
