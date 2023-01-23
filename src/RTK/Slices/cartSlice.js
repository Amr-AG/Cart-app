import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "addCart",
  reducers: {
    addCartAction: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.push(cloneProduct);
      }
    },
    removeCartAction: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return (state = []);
    },
    decreaseQuantity: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      }
    },
  },
});

export const { addCartAction, removeCartAction, clearCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
