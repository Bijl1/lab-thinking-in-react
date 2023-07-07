// src/components/ProductRow.js

import React from 'react';

function ProductRow({ product }) {
  const { name, price, category, inStock } = product;
  const rowStyle = { color: inStock ? 'inherit' : 'red' };

  return (
    <tr style={rowStyle}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{inStock ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default ProductRow;
