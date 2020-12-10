import React from 'react';

const ProductInfo = ({total, quantity, updateQuantity}) => (
  <div>
    <h1>Magic Potion #1</h1>
    <img src="./magic-potion.jpg" alt="productImage" />
    <select name="quantity" onChange={updateQuantity}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <input readOnly value={total} />
  </div>
);

export default ProductInfo;
