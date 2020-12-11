import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({ total, updateQuantity, quantity }) => (
  <div className="componentContainer product">
    <h1>Magic Potion #1</h1>
    <img src="./magic-potion.jpg" alt="productImage" />
    <select name="quantity" value={quantity} onChange={updateQuantity}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <input readOnly value={total} />
  </div>
);

ProductInfo.propTypes = {
  total: PropTypes.string.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductInfo;
