import React from 'react';

const ProductInfo = ({total, quantity, updateQuantity}) => (
  <div>
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
