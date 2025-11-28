import stellarModel from "@/assets/stellar_model.png";
import stellarSpireModel from "@/assets/StellarSphire_Model.png";
import ShannonModel from "@/assets/ShannonModel.png";

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
    id: "Stellar_Normal",
    name: "Stellar Normal",
    thumbnail: stellarModel,
    route: "/StellarNormal",
    category: "Display Units",
    description: "Technical drawing template"
  },{
    id: "Stellar_Cold",
    name: "Stellar Cold",
    thumbnail: stellarModel,
    route: "/StellarCold",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Hot",
    name: "Stellar Hot",
    thumbnail: stellarModel,
    route: "/StellarHot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Hot_CAVITY",
    name: "Stellar Hot Cavity",
    thumbnail: stellarModel,
    route: "/StellarHotCavity",
    category: "Display Units",
    description: "Technical drawing template"
  },
   {
    id: "StellarSpireNormal",
    name: "Stellar Spire Normal",
    thumbnail: stellarSpireModel,
    route: "/StellarSpireNormal",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Spire_Cold",
    name: "Stellar Spire Cold",
    thumbnail: stellarSpireModel,
    route: "/StellarSpireCold",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Spire_Hot",
    name: "Stellar Spire Hot",
    thumbnail: stellarSpireModel,
    route: "/StellarSpireHot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_Cash_Counter",
    name: "Stellar Cash Counter",
    thumbnail: stellarModel,
    route: "/StellarCashCounter",
    category: "Cash Counters",
    description: "Technical drawing template"
  },
  {
    id: "Stellar_PickUp_and_Delivery_Counter",
    name: "Stellar PickUp and Delivery Counter",
    thumbnail: stellarModel,
    route: "/StellarPickUpandDeliveryCounter",
    category: "Delivery Counters",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Cold",
    name: "Shannon Cold",
    thumbnail: ShannonModel,
    route: "/ShannonCold",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Hot",
    name: "Shannon Hot",
    thumbnail: ShannonModel,
    route: "/ShannonHot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Normal",
    name: "Shannon Normal",
    thumbnail: ShannonModel,
    route: "/ShannonNormal",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Hot_Cavity",
    name: "Shannon Hot Cavity",
    thumbnail: ShannonModel,
    route: "/ShannonHotCavity",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Cash_Counter",
    name: "Shannon Cash Counter",
    thumbnail: ShannonModel,
    route: "/ShannonCashCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },

  // Add remaining 65 products here following the same pattern
];
