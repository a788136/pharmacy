import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../features/products/productsSlice';
import ProductList from '../features/products/ProductList';

const CategoryProducts = () => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productsStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts(categoryId));
    }, [dispatch, categoryId]);

    return (
        <div>
            <h1>Товары категории</h1>
            {productsStatus === 'loading' && <p>Загрузка...</p>}
            {productsStatus === 'failed' && <p>Ошибка: {error}</p>}
            <ProductList products={products} isLoading={productsStatus === 'loading'} />
        </div>
    );
};

export default CategoryProducts;
