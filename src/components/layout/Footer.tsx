import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-cream">
      <div className="flw-container py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
              {siteConfig.brand}
            </h2>
            <p className="mt-3 text-sm text-cream/60 max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-cream/40 mb-4 font-display">
                Navigate
              </h3>
              <ul className="space-y-2.5">
                {siteConfig.navigation.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-cream/40 mb-4 font-display">
                Connect
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={siteConfig.contact.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/70 hover:text-cream transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <Instagram size={16} strokeWidth={1.5} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.contact.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/70 hover:text-cream transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <MessageCircle size={16} strokeWidth={1.5} />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {siteConfig.brand} — Sourced from China, delivered to South Africa.
          </p>
          <p className="text-xs text-cream/40">
            {siteConfig.shipping.estimatedDelivery} estimated delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
