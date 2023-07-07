// src/components/SearchBar/SearchBar.js

import React from 'react';

function SearchBar({ onSearch, inStockOnly, onInStockChange }) {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  const handleInStockChange = (event) => {
    const checked = event.target.checked;
    onInStockChange(checked);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search products..." />
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={handleInStockChange} />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
