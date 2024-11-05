import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Импорт компонентов страниц
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import CategoryProducts from '../pages/CategoryProducts';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import PayMethods from '../pages/PayMethodsFaq';
import Delivery from '../pages/DeliveryFaq';
import CheckoutFaq from '../pages/CheckoutFaq';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pay-methods-faq" element={<PayMethods />} />
    <Route path="/delivery-faq" element={<Delivery />} />
    <Route path="/checkout-faq" element={<CheckoutFaq />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/category/:categoryId" element={<CategoryProducts />} />
    <Route path="/product/:productId" element={<ProductDetails />} />
    <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
  </Routes>
);

export default AppRoutes;