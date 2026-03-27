# ecommerce-lite

## User Story M5.4S1

Initial setup and entity modeling for an e-commerce system using React with TypeScript

---

## Objective

As a riwi developer, the goal is to create a React project with TypeScript and define product and user interfaces to properly structure e-commerce data, ensuring strict, reusable, and scalable typing.

---

## Technologies

* React
* TypeScript
* Node.js
* npm

---

## Project Structure

```bash
src/
│
├── components/
│   ├── ProductCard.tsx
│   └── ProductList.tsx
│
├── interfaces/
│   ├── Product.ts
│   ├── User.ts
│   ├── Address.ts
│   └── Dimensions.ts
│
├── data/
│   └── data.ts
│
├── App.tsx
└── index.tsx
```

---

## Installation and Setup

### 1. Create the project

```bash
npx create-react-app ecommerce-lite --template typescript
cd ecommerce-lite
```

### 2. Run the application

```bash
npm start
```

The app will be available at:
http://localhost:3000

---

## Interface Modeling

### Product

```ts
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

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
  description?: string;
  dimensions?: Dimensions;
}
```

---

### User

```ts
export interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: string;
  address: Address;
  createdAt: Date;

  tags?: string[];
  description?: string;
}
```

---

## Mock Data

A centralized `data.ts` file includes:

* At least 15 products
* At least 5 users

Example:

```ts
export const products: Product[] = [
  {
    sku: "P001",
    name: "Laptop Pro 15",
    brand: "TechBrand",
    quantity: 10,
    price: 1500,
    isActive: true,
    category: "Electronics",
    imageUrl: "https://via.placeholder.com/150",
    createdAt: new Date(),
    tags: ["laptop", "tech"]
  }
];
```

---

## Product Rendering

### ProductCard

```tsx
import { Product } from "../interfaces/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
```

---

### ProductList

```tsx
import { products } from "../data/data";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
```

---

### App.tsx

```tsx
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <h1>ecommerce-lite</h1>
      <ProductList />
    </div>
  );
}

export default App;
```

---

## Acceptance Criteria

* React project initialized with TypeScript
* Interfaces defined (Product, User, Address, Dimensions)
* Centralized mock data in `data.ts`
* Product list rendered using `.map()`
* Strict typing in component props
* Organized and documented code
* README with setup instructions

---

## Notes

* Strict typing is enforced using TypeScript
* The structure is scalable for future features
* Can be extended with APIs, global state management, or authentication

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed.

See the section about deployment for more information.

### `npm run eject`

Note: this is a one-way operation. Once you eject, you cannot go back.

If you are not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project so you have full control over them.

You do not have to ever use eject. The curated feature set is suitable for small and medium deployments.

## Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
