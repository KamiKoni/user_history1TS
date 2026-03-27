/**
 * Interface to represent the physical dimensions of a product.
 * Used for shipping, storage, and technical specifications.
 */
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

/**
 * Interface to represent a product in the ecommerce catalog.
 * Contains all the information necessary to display and manage products.
 */
export interface Product {
  sku: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: boolean;
  category: string;
  imageUrl: string;
  createdAt: Date;

  tags?: string[];
  dimensions?: Dimensions;
  description?: string;
}