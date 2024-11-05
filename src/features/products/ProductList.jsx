import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductList = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <Skeleton count={5} height={50} />
      </div>
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} {product.currency_symbol}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
