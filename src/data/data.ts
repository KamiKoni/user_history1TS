import { Product } from "../interfaces/product";
import { User } from "../interfaces/user";

/**
 * Array of products available in the ecommerce catalog.
 * Contains 15 products with different categories and specifications.
 */
export const products: Product[] = [
  {
    sku: "P001",
    name: "Laptop Pro 15",
    brand: "TechBrand",
    quantity: 10,
    price: 1500,
    isActive: true,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    createdAt: new Date(),
    tags: ["laptop", "premium"],
    description: "High performance laptop",
    dimensions: { width: 35, height: 2, depth: 24 }
  },
  {
    sku: "P002",
    name: "Smartphone X",
    brand: "PhoneCorp",
    quantity: 25,
    price: 900,
    isActive: true,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    createdAt: new Date(),
    tags: ["phone"],
    description: "Latest smartphone model"
  },
  {
    sku: "P003",
    name: "Wireless Headphones",
    brand: "SoundMax",
    quantity: 40,
    price: 120,
    isActive: true,
    category: "Audio",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
    createdAt: new Date()
  },
  {
    sku: "P004",
    name: "Gaming Mouse",
    brand: "GameTech",
    quantity: 60,
    price: 50,
    isActive: true,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    createdAt: new Date()
  },
  {
    sku: "P005",
    name: "Mechanical Keyboard",
    brand: "KeyPro",
    quantity: 30,
    price: 110,
    isActive: true,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    createdAt: new Date(),
    tags: ["keyboard", "gaming"]
  }
  ,
  {
    sku: "P006",
    name: "4K Monitor",
    brand: "ViewBest",
    quantity: 15,
    price: 400,
    isActive: true,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    createdAt: new Date(),
    dimensions: { width: 60, height: 35, depth: 10 }
  },
  {
    sku: "P007",
    name: "USB-C Hub",
    brand: "Connectix",
    quantity: 80,
    price: 35,
    isActive: true,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1580894908361-967195033215",
    createdAt: new Date()
  },
  {
    sku: "P008",
    name: "External SSD 1TB",
    brand: "StoragePlus",
    quantity: 20,
    price: 180,
    isActive: true,
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
    createdAt: new Date()
  },
  {
    sku: "P009",
    name: "Bluetooth Speaker",
    brand: "SoundMax",
    quantity: 50,
    price: 70,
    isActive: true,
    category: "Audio",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
    createdAt: new Date()
  },
  {
    sku: "P010",
    name: "Smartwatch",
    brand: "WristTech",
    quantity: 35,
    price: 250,
    isActive: true,
    category: "Wearables",
    imageUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    createdAt: new Date()
  },
  {
    sku: "P011",
    name: "Tablet 10\"",
    brand: "TabWorld",
    quantity: 18,
    price: 300,
    isActive: true,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    createdAt: new Date()
  },
  {
    sku: "P012",
    name: "Desk Lamp LED",
    brand: "HomeLite",
    quantity: 70,
    price: 25,
    isActive: true,
    category: "Home",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    createdAt: new Date()
  },
  {
    sku: "P013",
    name: "Office Chair",
    brand: "ComfortSeat",
    quantity: 12,
    price: 220,
    isActive: true,
    category: "Furniture",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    createdAt: new Date(),
    dimensions: { width: 70, height: 120, depth: 70 }
  },
  {
    sku: "P014",
    name: "Webcam HD",
    brand: "CamVision",
    quantity: 45,
    price: 85,
    isActive: true,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    createdAt: new Date()
  },
  {
    sku: "P015",
    name: "Microphone USB",
    brand: "AudioPro",
    quantity: 28,
    price: 130,
    isActive: true,
    category: "Audio",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    createdAt: new Date(),
    description: "Professional USB microphone"
  }
];

/**
 * Array of ecommerce system users.
 * Includes users with different roles (admin, editor, user) and statuses.
 */
export const users: User[] = [
  {
    id: "U001",
    fullName: "Juan Pérez",
    email: "juan@email.com",
    isActive: true,
    role: "admin",
    address: {
      street: "Calle 1",
      city: "Medellín",
      country: "Colombia"
    },
    createdAt: new Date(),
    tags: ["admin", "manager"]
  },
  {
    id: "U002",
    fullName: "Ana Gómez",
    email: "ana@email.com",
    isActive: true,
    role: "user",
    address: {
      street: "Calle 2",
      city: "Bogotá",
      country: "Colombia"
    },
    createdAt: new Date()
  },
  {
    id: "U003",
    fullName: "Carlos Rodríguez",
    email: "carlos@email.com",
    isActive: false,
    role: "user",
    address: {
      street: "Carrera 10",
      city: "Cali",
      country: "Colombia"
    },
    createdAt: new Date(),
    description: "Inactive user"
  },
  {
    id: "U004",
    fullName: "Laura Martínez",
    email: "laura@email.com",
    isActive: true,
    role: "editor",
    address: {
      street: "Avenida 5",
      city: "Barranquilla",
      country: "Colombia"
    },
    createdAt: new Date()
  },
  {
    id: "U005",
    fullName: "Pedro Sánchez",
    email: "pedro@email.com",
    isActive: true,
    role: "user",
    address: {
      street: "Calle 8",
      city: "Cartagena",
      country: "Colombia"
    },
    createdAt: new Date(),
    tags: ["vip"]
  }
];