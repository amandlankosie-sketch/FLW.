/**
 * FLW. — Product Catalogue Data
 *
 * All product data lives here. To add, remove, or edit products, variants,
 * storage options, or prices, update this file only — no component changes needed.
 *
 * Pricing convention:
 *   - Set `price` to a number (in ZAR) when the price is confirmed.
 *   - Set `price` to null to display "Price on request" instead of a number.
 *
 * Image convention:
 *   - Each product has an `imageRef` string (e.g. "iphone-15", "galaxy-s25").
 *   - The ProductImage component maps imageRef → rendered placeholder.
 *   - To use real images later, replace the placeholder mapping in
 *     src/components/product/ProductImage.tsx with real image imports/URLs.
 */

export type Availability = "available" | "limited" | "unavailable" | "on-request";

export interface StorageOption {
  label: string;
  price: number | null;
}

export interface ProductVariant {
  model: string;
  storage: StorageOption[];
}

export interface Product {
  id: string;
  brand: "Apple" | "Samsung";
  family: string;
  name: string;
  imageRef: string;
  availability: Availability;
  variants: ProductVariant[];
  description: string;
}

export const products: Product[] = [
  {
    id: "iphone-13",
    brand: "Apple",
    family: "iPhone 13",
    name: "iPhone 13",
    imageRef: "iphone-13",
    availability: "available",
    description:
      "A reliable everyday iPhone with a bright Super Retina XDR display, dual-camera system, and all-day battery life.",
    variants: [
      {
        model: "Standard",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
        ],
      },
      {
        model: "Pro",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
      {
        model: "Pro Max",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
    ],
  },
  {
    id: "iphone-14",
    brand: "Apple",
    family: "iPhone 14",
    name: "iPhone 14",
    imageRef: "iphone-14",
    availability: "available",
    description:
      "An upgraded everyday iPhone with an advanced dual-camera system, larger display, and improved battery performance.",
    variants: [
      {
        model: "Standard",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
        ],
      },
      {
        model: "Plus",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
        ],
      },
      {
        model: "Pro",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
      {
        model: "Pro Max",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
    ],
  },
  {
    id: "iphone-15",
    brand: "Apple",
    family: "iPhone 15",
    name: "iPhone 15",
    imageRef: "iphone-15",
    availability: "available",
    description:
      "The latest iPhone with a dynamic island, USB-C, a 48MP main camera, and the A16 Bionic chip for outstanding performance.",
    variants: [
      {
        model: "Standard",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
        ],
      },
      {
        model: "Plus",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
        ],
      },
      {
        model: "Pro",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
          { label: "512GB", price: null },
          { label: "1TB", price: null },
        ],
      },
      {
        model: "Pro Max",
        storage: [
          { label: "256GB", price: null },
          { label: "512GB", price: null },
          { label: "1TB", price: null },
        ],
      },
    ],
  },
  {
    id: "galaxy-s24",
    brand: "Samsung",
    family: "Galaxy S24",
    name: "Galaxy S24",
    imageRef: "galaxy-s24",
    availability: "available",
    description:
      "A compact flagship with Galaxy AI features, a bright AMOLED display, and a versatile triple-camera system.",
    variants: [
      {
        model: "Galaxy S24",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
        ],
      },
      {
        model: "Galaxy S24+",
        storage: [
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
      {
        model: "Galaxy S24 Ultra",
        storage: [
          { label: "256GB", price: null },
          { label: "512GB", price: null },
          { label: "1TB", price: null },
        ],
      },
    ],
  },
  {
    id: "galaxy-s25",
    brand: "Samsung",
    family: "Galaxy S25",
    name: "Galaxy S25",
    imageRef: "galaxy-s25",
    availability: "available",
    description:
      "Samsung's next-generation flagship with advanced AI capabilities, a stunning display, and pro-grade cameras.",
    variants: [
      {
        model: "Galaxy S25",
        storage: [
          { label: "128GB", price: null },
          { label: "256GB", price: null },
        ],
      },
      {
        model: "Galaxy S25+",
        storage: [
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
      {
        model: "Galaxy S25 Ultra",
        storage: [
          { label: "256GB", price: null },
          { label: "512GB", price: null },
          { label: "1TB", price: null },
        ],
      },
    ],
  },
  {
    id: "galaxy-s26",
    brand: "Samsung",
    family: "Galaxy S26",
    name: "Galaxy S26",
    imageRef: "galaxy-s26",
    availability: "on-request",
    description:
      "The upcoming Samsung flagship — expected to push the boundaries of mobile AI, photography, and design.",
    variants: [
      {
        model: "Galaxy S26",
        storage: [
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
      {
        model: "Galaxy S26+",
        storage: [
          { label: "256GB", price: null },
          { label: "512GB", price: null },
        ],
      },
      {
        model: "Galaxy S26 Ultra",
        storage: [
          { label: "512GB", price: null },
          { label: "1TB", price: null },
        ],
      },
    ],
  },
];

export const productCategories = [
  { label: "All Products", value: "all" },
  { label: "Apple", value: "Apple" },
  { label: "Samsung", value: "Samsung" },
] as const;

export type ProductCategoryValue = (typeof productCategories)[number]["value"];

/**
 * Returns the lowest confirmed price for a product, or null if no
 * variant has a confirmed price (meaning "Price on request").
 */
export function getStartingPrice(product: Product): number | null {
  let lowest: number | null = null;
  for (const variant of product.variants) {
    for (const storage of variant.storage) {
      if (storage.price !== null) {
        if (lowest === null || storage.price < lowest) {
          lowest = storage.price;
        }
      }
    }
  }
  return lowest;
}

/**
 * Returns the set of unique model names across all variants of a product.
 */
export function getModels(product: Product): string[] {
  return product.variants.map((v) => v.model);
}

/**
 * Returns the storage options available for a specific model of a product.
 */
export function getStorageForModel(
  product: Product,
  model: string
): StorageOption[] {
  const variant = product.variants.find((v) => v.model === model);
  return variant ? variant.storage : [];
}

export const availabilityLabels: Record<Availability, string> = {
  available: "Available",
  limited: "Limited Availability",
  unavailable: "Currently Unavailable",
  "on-request": "Price on Request",
};
