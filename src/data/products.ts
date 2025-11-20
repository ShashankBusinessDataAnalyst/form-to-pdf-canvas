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
    id: "shannon-cold",
    name: "Shannon Cold",
    thumbnail: "/src/assets/cold-template.png",
    route: "/shannon-cold",
    category: "Cold Storage",
    description: "Technical drawing template for cold storage units"
  },
  {
    id: "shannon-hot",
    name: "Shannon Hot",
    thumbnail: "/src/assets/hot-template.png",
    route: "/shannon-hot",
    category: "Hot Storage",
    description: "Technical drawing template for hot storage units"
  },
  {
    id: "product-3",
    name: "Product Name 3",
    thumbnail: "/src/assets/cold-template.png",
    route: "/product-3",
    category: "Cold Storage",
    description: "Technical drawing template"
  },
  {
    id: "product-4",
    name: "Product Name 4",
    thumbnail: "/src/assets/hot-template.png",
    route: "/product-4",
    category: "Hot Storage",
    description: "Technical drawing template"
  },
  {
    id: "product-5",
    name: "Product Name 5",
    thumbnail: "/src/assets/cold-template.png",
    route: "/product-5",
    category: "Cold Storage",
    description: "Technical drawing template"
  },
  // Add remaining 65 products here following the same pattern
];
