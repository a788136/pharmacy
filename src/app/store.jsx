import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import modalReducer from "../features/modal/modalSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    favorites: favoritesReducer,
    modal: modalReducer,
  },
});