import stellarModel from "@/assets/stellar_model.png";
import shannonThumbnail from "@/assets/Shannon-thumbnail.png";
import coldTemplate from "@/assets/cold-template.png";
import hotTemplate from "@/assets/hot-template.png";

export interface ProductInfo {
  id: string;
  name: string;
  thumbnail: string;
  route: string;
  category?: string;
  description?: string;
}

export const products: ProductInfo[] = [
  {
    id: "Stellar_Cold",
    name: "Stellar Cold",
    thumbnail: stellarModel,
    route: "/Stellar_Cold",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Hot",
    name: "Stellar Hot",
    thumbnail: stellarModel,
    route: "/Stellar_Hot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_NORMAL",
    name: "Stellar Normal",
    thumbnail: stellarModel,
    route: "/Stellar_NORMAL",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_CAVITY",
    name: "Stellar Cavity",
    thumbnail: stellarModel,
    route: "/Stellar_CAVITY",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "shannon-cold",
    name: "Shannon Cold",
    thumbnail: shannonThumbnail,
    route: "/shannon-cold",
    category: "Cold Storage",
    description: "Technical drawing template for cold storage units"
  },
  {
    id: "shannon-hot",
    name: "Shannon Hot",
    thumbnail: hotTemplate,
    route: "/shannon-hot",
    category: "Hot Storage",
    description: "Technical drawing template for hot storage units"
  },
  {
    id: "product-3",
    name: "Product Name 3",
    thumbnail: coldTemplate,
    route: "/product-3",
    category: "Cold Storage",
    description: "Technical drawing template"
  },
  {
    id: "product-4",
    name: "Product Name 4",
    thumbnail: hotTemplate,
    route: "/product-4",
    category: "Hot Storage",
    description: "Technical drawing template"
  },
  {
    id: "product-5",
    name: "Product Name 5",
    thumbnail: coldTemplate,
    route: "/product-5",
    category: "Cold Storage",
    description: "Technical drawing template"
  },
  
  // Add remaining 65 products here following the same pattern
];
