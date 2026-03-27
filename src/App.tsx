import React from 'react';
import logo from './logo.svg';            // Import local asset (not used in current component)
import './App.css';                      // Global app styles
import { products } from './data/data';  // Array of products data
import ProductCard from './component/productcard'; // Component that renders each product card

function App() {
  return (
    <div style={{ padding: 20 }}>         {/* Main container with UI padding */}
      <h1>Product List</h1>              {/* Title */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // Three responsive columns
          gap: 20,                               // Space between items
        }}
      >
        {/* 
          Maps through products array and generates a ProductCard for each one.
          Uses `sku` as key (unique identifier).
        */}
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App; // Export default of root component
