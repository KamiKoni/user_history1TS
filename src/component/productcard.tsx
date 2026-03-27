import { Product } from "../interfaces/product";

/**
 * Props for the ProductCard component.
 * Defines the data structure that the component receives.
 */
interface ProductCardProps {
  product: Product;
}

/**
 * Component that renders a product card.
 * Displays the product image, name, category, and price in a grid UI.
 */
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <img 
  src={product.imageUrl} 
  alt={product.name} 
  style={{ width: "100%", height: 150, objectFit: "cover" }} 
/>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};


export default ProductCard;