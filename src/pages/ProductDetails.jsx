import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../app/api';
import { addToCart } from '../features/cart/cartSlice';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Не удалось загрузить данные о товаре');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <p>Загрузка данных о товаре...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images[0]?.src} alt={product.name} style={{ width: '300px', height: '300px' }} />
      <p>{product.description}</p>
      <p>Цена: {product.price} {product.currency_symbol}</p>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
};

export default ProductDetails;
