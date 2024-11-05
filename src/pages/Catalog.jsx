import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import ProductList from '../features/products/ProductList';

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productsStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  return (
    <div>
      <h1>Каталог товаров</h1>
      {productsStatus === 'loading' && <p>Загрузка...</p>}
      {productsStatus === 'failed' && <p>Ошибка: {error}</p>}
      <ProductList products={products} isLoading={productsStatus === 'loading'} />
    </div>
  );
};

export default Catalog;
