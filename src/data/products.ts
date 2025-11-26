import stellarModel from "@/assets/stellar_model.png";
import stellarSpireModel from "@/assets/StellarSphire_Model.png";


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
    id: "Stellar_NORMAL",
    name: "Stellar Normal",
    thumbnail: stellarModel,
    route: "/Stellar_NORMAL",
    category: "Display Units",
    description: "Technical drawing template"
  },{
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
    id: "Stellar_Hot_CAVITY",
    name: "Stellar Hot Cavity",
    thumbnail: stellarModel,
    route: "/Stellar_Hot_CAVITY",
    category: "Display Units",
    description: "Technical drawing template"
  },
   {
    id: "Stellar_Spire_Normal",
    name: "Stellar Spire Normal",
    thumbnail: stellarSpireModel,
    route: "/Stellar_Spire_Normal",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Spire_Cold",
    name: "Stellar Spire Cold",
    thumbnail: stellarSpireModel,
    route: "/Stellar_Spire_Cold",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Spire_Hot",
    name: "Stellar Spire Hot",
    thumbnail: stellarSpireModel,
    route: "/Stellar_Spire_Hot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Cash_Counter",
    name: "Stellar Cash Counter",
    thumbnail: stellarModel,
    route: "/Stellar_Cash_Counter",
    category: "Cash Counters",
    description: "Technical drawing template"
  }
  // Add remaining 65 products here following the same pattern
];
