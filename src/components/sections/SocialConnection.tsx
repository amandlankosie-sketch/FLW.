import { motion } from "framer-motion";
import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../config/site";

export default function SocialConnection() {
  const socials = [
    {
      name: "Instagram",
      icon: Instagram,
      url: siteConfig.contact.instagram.url,
      handle: siteConfig.contact.instagram.handle,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: siteConfig.contact.whatsapp.url,
      handle: "Chat with us",
    },
  ];

  return (
    <section className="bg-cream py-20 sm:py-28 border-t border-charcoal/8">
      <div className="flw-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-charcoal/40 font-display">
            Connect
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-display tracking-tight text-charcoal">
            Follow the journey
          </h2>
          <p className="mt-4 text-base text-charcoal/60 max-w-md mx-auto">
            Stay updated on new arrivals, sourcing updates, and deliveries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative flex items-center justify-between p-6 sm:p-8 bg-cream-light border border-charcoal/8 hover:border-charcoal/20 hover:bg-cream-dark transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-charcoal/15 group-hover:bg-charcoal group-hover:border-charcoal transition-all duration-300">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-charcoal group-hover:text-cream transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-charcoal">
                      {social.name}
                    </h3>
                    <p className="text-sm text-charcoal/50">{social.handle}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-charcoal/30 group-hover:text-charcoal group-hover:rotate-45 transition-all duration-300"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
