import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const incomingProduct = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === incomingProduct.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({ ...incomingProduct, quantity: 1 });
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productId);
        return;
      }

      existingItem.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
