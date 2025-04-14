// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item.quantity === 1) {
        return state.filter((i) => i.id !== action.payload.id);
      } else {
        item.quantity -= 1;
      }
    },
  },
});
export const selectCartCount = (state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0);
  

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
