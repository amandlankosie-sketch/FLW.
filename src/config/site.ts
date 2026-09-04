/**
 * FLW. — Central Configuration
 *
 * Edit this file to update contact details, social links, and site-wide settings.
 * All placeholders use clearly identifiable placeholder values — replace with real values when ready.
 */

export const siteConfig = {
  brand: "FLW.",
  tagline: "See it. Want it. We'll source it.",
  description:
    "FLW. connects you to products from China through a simple, transparent sourcing experience — from finding what you want to getting it delivered to South Africa.",

  contact: {
    instagram: {
      url: "INSTAGRAM_URL",
      handle: "@flw.sa",
    },
    whatsapp: {
      number: "WHATSAPP_NUMBER",
      url: "WHATSAPP_URL",
      label: "WhatsApp",
    },
  },

  shipping: {
    estimatedDelivery: "7–10 Days",
    estimatedDeliveryDetail:
      "Estimated delivery is generally 7–10 days from the date an order is confirmed and shipped from suppliers in China to South Africa.",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#shop" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Shipping & Info", href: "#shipping" },
  ],

  categories: [
    {
      name: "Tech & Gadgets",
      description: "The latest electronics, accessories, and smart devices sourced from trusted suppliers in China.",
      icon: "Cpu",
    },
    {
      name: "Apparel & Wardrobe",
      description: "Curated fashion pieces and wardrobe essentials, sourced and delivered to your door.",
      icon: "Shirt",
    },
  ],

  steps: [
    {
      number: "01",
      title: "Choose What You Want",
      description: "Browse selected products and pick exactly what you want from our sourced catalogue.",
    },
    {
      number: "02",
      title: "Confirm Your Order",
      description: "Review your selections and send your order through WhatsApp with a unique order number.",
    },
    {
      number: "03",
      title: "From China to Your Doorstep",
      description: "We handle sourcing, shipping, and delivery from China straight to your address in South Africa.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
