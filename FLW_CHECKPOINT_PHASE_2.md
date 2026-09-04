# FLW CHECKPOINT — PHASE 2

## 1. What Was Completed

- Built a complete product catalogue (Shop page) with category filtering and product configuration.
- Created a central product data structure with all Apple and Samsung products and their variants.
- Built premium product cards with starting prices, availability badges, and model counts.
- Built a product detail modal with model selection, storage selection, and dynamic price updates.
- Added category filter (All Products, Apple, Samsung) with animated pill indicator.
- All product prices are set to `null` (showing "Price on request") — no invented prices.
- Preserved all Phase 0 and Phase 1 work — no redesign of existing components.
- Build passes: TypeScript type check and Vite production build both succeed.

---

## 2. Product Pages / Components Created

| File | Purpose |
|---|---|
| `src/config/products.ts` | Central product data: types, all products, helper functions, availability labels |
| `src/components/product/ProductImage.tsx` | Branded placeholder images (maps imageRef → visual) |
| `src/components/product/ProductCard.tsx` | Premium product card with image, brand, name, starting price, availability |
| `src/components/product/CategoryFilter.tsx` | Category filter pills with animated active state |
| `src/components/product/ProductDetail.tsx` | Full-screen modal with model/storage selection and dynamic pricing |
| `src/components/sections/Shop.tsx` | Shop section: header, filter, product grid, detail modal |

---

## 3. Files Changed

| File | Change |
|---|---|
| `src/App.tsx` | Added Shop section import and placed it after WhatWeSource |
| `src/config/site.ts` | Fixed navigation array (removed duplicate entries) |
| `src/components/sections/WhatWeSource.tsx` | Changed section id from `shop` to `what-we-source` to avoid conflict with Shop section |

---

## 4. How Product Data Is Structured

All product data lives in `src/config/products.ts`.

```
Product
├── id            (e.g. "iphone-15")
├── brand         ("Apple" | "Samsung")
├── family        (e.g. "iPhone 15")
├── name          (e.g. "iPhone 15")
├── imageRef      (e.g. "iphone-15" — used by ProductImage component)
├── availability  ("available" | "limited" | "unavailable" | "on-request")
├── description   (short product description)
└── variants[]
    ├── model     (e.g. "Pro", "Galaxy S25 Ultra")
    └── storage[]
        ├── label  (e.g. "128GB")
        └── price  (number in ZAR, or null for "Price on request")
```

Helper functions:
- `getStartingPrice(product)` — returns the lowest confirmed price or null
- `getModels(product)` — returns unique model names
- `getStorageForModel(product, model)` — returns storage options for a specific model

To add a new product: add a new object to the `products` array.
To add a variant: add to the `variants` array of an existing product.
To add storage: add to the `storage` array of a variant.

---

## 5. How Prices Can Be Edited Later

All prices live in `src/config/products.ts` inside each `StorageOption.price` field.

- To set a confirmed price: change `price: null` to `price: 18999` (number in ZAR).
- To show "Price on request": keep `price: null`.
- The product card shows "From R___" using the lowest price across all variants.
- The product detail modal shows the price for the currently selected model + storage combination.
- Prices are never scattered across components — they are only read from this file.

Currently all prices are `null` (Price on request) as instructed — no invented prices.

---

## 6. How Product Images Can Be Replaced Later

The `ProductImage` component (`src/components/product/ProductImage.tsx`) renders a branded placeholder based on the `imageRef` string.

Each product has an `imageRef`:
- `iphone-13`, `iphone-14`, `iphone-15`
- `galaxy-s24`, `galaxy-s25`, `galaxy-s26`

To add real images:
1. Place image files in `src/assets/products/` (e.g. `iphone-15.jpg`)
2. In `ProductImage.tsx`, import the images and create a mapping:
   ```ts
   const imageMap: Record<string, string> = {
     "iphone-15": iphone15Img,
     "galaxy-s25": galaxyS25Img,
     // ...
   };
   ```
3. Replace the placeholder JSX with `<img src={imageMap[imageRef]} alt={name} />`
4. No other components need to change — they all use `ProductImage` and `imageRef`.

---

## 7. Anything Incomplete

- No shopping cart (Phase 3)
- No checkout or payment (future phase)
- No order number generation (future phase)
- No WhatsApp order messaging (future phase)
- All product prices are "Price on request" — real prices need to be added to `src/config/products.ts`
- Product images are placeholders — real images need to be added to `ProductImage.tsx`
- Clothing/apparel catalogue not built (future expansion phase, per instructions)

---

## 8. Known Issues

- No known bugs. Build and type check pass cleanly.
- The product detail modal slides up from the bottom on mobile and appears centered on desktop — both tested via build, not visually verified in a browser (dev server not accessible from this environment).
- The `WhatWeSource` section still shows "Soon" badges on category cards — this is intentional as the full apparel catalogue is a future phase. The Shop section now contains the live product catalogue for Apple and Samsung.

---

**Phase 2 is complete. Stopping here as instructed.**

Next phase: **PHASE 3 — SHOPPING CART SYSTEM**
