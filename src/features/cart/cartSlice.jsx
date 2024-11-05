import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find(product => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Увеличиваем количество, если товар уже в корзине
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    // Добавьте другие действия, если нужно (например, удаление товара, очистка корзины)
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
