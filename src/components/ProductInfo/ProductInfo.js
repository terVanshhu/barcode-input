import React from 'react';

function ProductInfo({ info }) {
  return (
    <div className="product-info">
      <h2>{info.name}</h2>
      <h3>Sustainability Scores:</h3>
      <p>Reusability: {(info.reusabilityScore * 100).toFixed(2)}% ({info.reusable ? 'Reusable' : 'Not Reusable'})</p>
      <p>Recyclability: {(info.recyclabilityScore * 100).toFixed(2)}% ({info.recyclable ? 'Recyclable' : 'Not Recyclable'})</p>
      <p>Reducibility: {(info.reducibilityScore * 100).toFixed(2)}% ({info.reducible ? 'Reducible' : 'Not Reducible'})</p>
      <h3>Product Description:</h3>
      <p>{info.description}</p>
    </div>
  );
}

export default ProductInfo;
