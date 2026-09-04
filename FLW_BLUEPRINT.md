# FLW. — Project Blueprint

## Brand Rules

- The brand name must **always** be displayed as: **FLW.**
- All letters uppercase, the period is part of the brand.
- Never alter the letters. Never remove the period.

### Visual Identity

| Token | Value | Usage |
|---|---|---|
| Primary | Deep charcoal / near-black (`#1a1a1a`) | Text, buttons, dark sections |
| Background | Warm off-white / soft cream (`#f5f2ed`) | Page background, light sections |
| Secondary | Soft warm greys (`#8a8580`) | Subtle text, borders, dividers |
| Accent | Warm muted gold (`#c4a87a`) | Minimal highlights, hover states |

- Visual energy comes from layout, typography, interaction, and animation — not excessive colour.
- Never use bright random colours. Never use purple/indigo/violet hues.

### Typography

- Display font: **Space Grotesk** (headings, logo, buttons)
- Body font: **Inter** (paragraphs, navigation, labels)
- Max 3 weights per font family.

---

## Website Pages (Planned)

| Page | Status | Description |
|---|---|---|
| Home | Phase 1 (built) | Hero, What We Source, How It Works preview, Shipping preview, Social |
| Shop | Phase 2 (planned) | Product catalogue with variants |
| How It Works | Phase 3 (planned) | Full detailed process page |
| Shipping & Info | Phase 3 (planned) | Full shipping/info page |

---

## Current Development Phase

**Phase 1 — Foundation (COMPLETE)**

See `FLW_CHECKPOINT_PHASE_1.md` for the completion report.

---

## Future Phases

| Phase | Scope |
|---|---|
| Phase 2 | Product catalogue: browse products, select variants, add to cart |
| Phase 3 | Cart review, order number generation, WhatsApp order sending |
| Phase 4 | Full How It Works page, Shipping & Info page |
| Phase 5 | Major interactive animation system |

---

## Product Data Structure (Future — Phase 2)

```ts
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  variants: ProductVariant[];
  inStock: boolean;
}

interface ProductVariant {
  id: string;
  name: string;       // e.g. "Colour", "Size"
  options: string[];  // e.g. ["Black", "White"] / ["S", "M", "L"]
}
```

This structure is planned for Phase 2 and is documented here for continuity.

---

## Contact Configuration Placeholders

All editable values live in `src/config/site.ts`.

| Placeholder | Location | Purpose |
|---|---|---|
| `INSTAGRAM_URL` | `siteConfig.contact.instagram.url` | Instagram profile link |
| `WHATSAPP_NUMBER` | `siteConfig.contact.whatsapp.number` | WhatsApp phone number |
| `WHATSAPP_URL` | `siteConfig.contact.whatsapp.url` | WhatsApp click-to-chat link |

**Do not use fake real contact details.** Replace placeholders with real values when available.

---

## Checkpoint Protocol

At the end of each phase, create a checkpoint report:

1. What was completed
2. Files/components created or changed
3. Current website functionality
4. Anything incomplete
5. Recommended next phase

Checkpoint files: `FLW_CHECKPOINT_PHASE_<N>.md` in the project root.

---

## Tech Stack

- **Vite** — build tool / dev server
- **React 18 + TypeScript** — UI framework
- **Tailwind CSS v4** — styling
- **Framer Motion** — animation foundation
- **lucide-react** — icon library

## Project Structure

```
src/
├── config/
│   └── site.ts          # Central configuration (editable)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WhatWeSource.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ShippingPreview.tsx
│   │   └── SocialConnection.tsx
│   └── ui/
│       └── Button.tsx
├── App.tsx
├── main.tsx
└── index.css
```
