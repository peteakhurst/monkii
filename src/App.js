import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import productsData from '../src/components/assets/json/products.json';
import Logo from './components/assets/products/monkii-logo.png';

export default function App() {

  const [products, setProducts] = useState(productsData.products);

  function onChange(event) {
    const sortOrder = event.target.value;

    if (sortOrder === "highest") {
      sortProductsHighest();
    } else if (sortOrder === "lowest") {
      sortProductsLowest();
    }
  }

  function changeSize(event) {
    const sortOrder = event.target.value;

    if (sortOrder === "small") {
      sortProductsSmall();
    } else if (sortOrder === "medium") {
      sortProductsMedium();
    } 
    // else if (sortOrder === "large") {
    //   sortProductsLarge();
    // }  
    // }else if (sortOrder === "medium") {
    //   sortProductsMedium();
    // } else if (sortOrder === "extra-large") {
    //   sortProductsXl();
    // }
  }

  function sortProductsHighest() {
    const { products } = productsData; // destructure nested products from JSON data

    const sortedProducts = [...products].sort((product1, product2) =>
      product1.price > product2.price ? -1 : 1
    );
    setProducts(sortedProducts);
  }

  function sortProductsLowest() {
    const { products } = productsData; // destructure nested products from JSON data

    const sortedProducts = [...products].sort((product1, product2) =>
      product1.price > product2.price ? 1 : -1
    );

    setProducts(sortedProducts);
  }

  function sortProductsSmall() {
    const { products } = productsData; // destructure nested products from JSON data

    const sortedProducts = [...products].sort((product1, product2) =>
      product1.size > product2.size ? -1 : 1
    );
    setProducts(sortedProducts);
  }

  function sortProductsMedium() {
    const { products } = productsData; // destructure nested products from JSON data

    const sortedProducts = [...products].sort((product1, product2) =>
      product1.size > product2.size ? 1 : -1
    );

    setProducts(sortedProducts);
  }
    
  return (
    <div className="App">
      <div>
      <div className="grid bg-gray-400 lg:grid-cols-2 2xl:grid-cols-5">
        <div className="container max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:px-12 lg:py-4 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src={Logo} alt="Monkii Logo" />
          </div>
        </div>
      </div>

      <div className="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
        
        <h2 className="text-xl text-left text-gray-900">Products</h2>
        
          <p className="text-left text-gray-900 tet-sm">7 items</p>
          <div className="flex items-center justify-evenly">
            <label htmlFor="price">Order by: </label>
            <select className="" onChange={onChange}>
              <option value="">Sort products (make selection)</option>
              <option value="lowest">Price - Low to High 🔻</option>
              <option value="highest">Price - High to Low 🔺</option>
            </select>
            <label className="" htmlFor="size">Filter by Size: </label>
            <select changeSize={changeSize}>
              <option value="">All</option>
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="extra-large">XL</option>
            </select>
         </div>

          <div className="grid gap-6 mt-6 border border-2 lg:grid-cols-1 xl:grid-cols-3 lg:p-14">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  </div>
  );
}