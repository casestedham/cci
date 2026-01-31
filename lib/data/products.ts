export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // retail price in cents
  cost: number; // cost price in cents (for employee discount)
  image: string;
  category: "apparel" | "gear" | "accessories";
  sizes?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "tshirt-orange",
    name: "CCI Logo T-Shirt",
    description: "Comfortable cotton t-shirt with CCI logo",
    price: 2500, // $25.00
    cost: 1200, // $12.00
    image: "/images/merch/tshirt.png",
    category: "apparel",
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
  },
  {
    id: "hoodie-black",
    name: "CCI Work Hoodie",
    description: "Heavy-duty hoodie perfect for cool mornings",
    price: 4500, // $45.00
    cost: 2200, // $22.00
    image: "/images/merch/hoodie.png",
    category: "apparel",
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
  },
  {
    id: "hat-orange",
    name: "CCI Snapback Hat",
    description: "Adjustable snapback with embroidered logo",
    price: 2000, // $20.00
    cost: 900, // $9.00
    image: "/images/merch/hat.png",
    category: "apparel",
    inStock: true,
  },
  {
    id: "mug-orange",
    name: "CCI Coffee Mug",
    description: "15oz ceramic mug with CCI logo",
    price: 1500, // $15.00
    cost: 600, // $6.00
    image: "/images/merch/mug.png",
    category: "accessories",
    inStock: true,
  },
  {
    id: "sticker-pack",
    name: "CCI Sticker Pack",
    description: "Pack of 5 waterproof vinyl stickers",
    price: 800, // $8.00
    cost: 300, // $3.00
    image: "/images/merch/stickers.png",
    category: "accessories",
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function calculateDiscount(retailPrice: number, costPrice: number): number {
  return Math.round(((retailPrice - costPrice) / retailPrice) * 100);
}
