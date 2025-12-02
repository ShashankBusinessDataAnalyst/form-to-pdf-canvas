import stellarModel from "@/assets/stellar_model.png";
import stellarSpireModel from "@/assets/StellarSphire_Model.png";
import ShannonModel from "@/assets/ShannonModel.png";
import SilyaModel from "@/assets/SilyaModel.png";
import SteffaniaModel from "@/assets/SteffaniaModel.png";

export interface ProductInfo {
  id: string;
  name: string;
  thumbnail: string;
  route: string;
  category?: string;
  description?: string;
}

export const products: ProductInfo[] = [
  /*{
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
  {
    id: "Shannon_PickUp_Delivery_Counter",
    name: "Shannon PickUp Delivery Counter",
    thumbnail: ShannonModel,
    route: "/ShannonPickUpDeliveryCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Corner_Counter",
    name: "Shannon Corner Counter",
    thumbnail: ShannonModel,
    route: "/ShannonCornerCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Cold_3",
    name: "Silya Cold 3+1 Counter",
    thumbnail: SilyaModel,
    route: "/SilyaCold3",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Hot_3",
    name: "Silya Hot 3+1 Counter",
    thumbnail: SilyaModel,
    route: "/SilyaHot3",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Normal_3",
    name: "Silya Normal 3+1 Counter",
    thumbnail: SilyaModel,
    route: "/SilyaNormal3",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Hot_Cavity_3",
    name: "Silya Hot Cavity 3+1 Counter",
    thumbnail: SilyaModel,
    route: "/SilyaHotCavity3",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Cold_4",
    name: "Silya Cold 4+1 Counter",
    thumbnail: SilyaModel,
    route: "/SilyaCold4",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Hot_4",
    name: "Silya Hot 4+1 Counter",
    thumbnail: SilyaModel,
    route: "/SilyaHot4",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Normal_4",
    name: "Silya Normal 4+1 Counter",
    thumbnail: SilyaModel,
    route: "/SilyaNormal4",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Corner_Counter",
    name: "Silya Corner Counter",
    thumbnail: SilyaModel,
    route: "/SilyaCornerCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_Cash_Counter",
    name: "Silya Cash Counter",
    thumbnail: SilyaModel,
    route: "/SilyaCashCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Silya_PickUp_Delivery_Counter",
    name: "Silya PickUp Delivery Counter",
    thumbnail: SilyaModel,
    route: "/SilyaPickUpDeliveryCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Low_Base_Hot_tmpt",
    name: "Shannon Low Base Hot Counter",
    thumbnail: ShannonModel,
    route: "/ShannonLowBaseHot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Low_Base_Normal_tmpt",
    name: "Shannon Low Base Normal Counter",
    thumbnail: ShannonModel,
    route: "/ShannonLowBaseNormal",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Shannon_Low_Base_Hot_Cavity_tmpt",
    name: "Shannon Low Base Hot Cavity Counter",
    thumbnail: ShannonModel,
    route: "/ShannonLowBaseHotCavity",
    category: "Display Units",
    description: "Technical drawing template"
  },*/
  {
    id: "Steffania_Cold_tmpt",
    name: "Steffania Cold",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaCold",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_Hot_tmpt",
    name: "Steffania Hot",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaHot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_Normal_tmpt",
    name: "Steffania Normal",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaNormal",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_PickUp_Delivery_Counter_tmpt",
    name: "Steffania PickUp Delivery Counter",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaPickUpDeliveryCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_Cash_Counter_tmpt",
    name: "Steffania Cash Counter",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaCashCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_Corner_Counter_tmpt",
    name: "Steffania Corner Counter",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaCornerCounter",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_Prima_Cold_tmpt",
    name: "Steffania Prima Cold",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaPrimaCold",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_Prima_Hot_tmpt",
    name: "Steffania Prima Hot",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaPrimaHot",
    category: "Display Units",
    description: "Technical drawing template"
  },
  {
    id: "Steffania_Prima_Normal_tmpt",
    name: "Steffania Prima Normal",
    thumbnail: SteffaniaModel,
    route: "/SteffaniaPrimaNormal",
    category: "Display Units",
    description: "Technical drawing template"
  },




  // Add remaining 65 products here following the same pattern
];
