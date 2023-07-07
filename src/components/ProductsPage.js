// src/components/ProductsPage/ProductsPage.js

import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterProducts(query, inStockOnly);
  };

  const handleInStockChange = (checked) => {
    setInStockOnly(checked);
    filterProducts(searchQuery, checked);
  };

  const filterProducts = (query, inStock) => {
    let filteredProducts = jsonData;

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (inStock) {
      filteredProducts = filteredProducts.filter((product) => product.inStock);
    }

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} inStockOnly={inStockOnly} onInStockChange={handleInStockChange} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
