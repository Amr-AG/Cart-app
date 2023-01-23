import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = "https://fakestoreapi.com/products";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  }
);
export const productsSlice = createSlice({
  initialState: [],
  name: "products",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(getJewelry.fulfilled, (state, action) => {
    //   return action.payload;
    // });
  },
});
export const { getProductsAction } = productsSlice.actions;
export default productsSlice.reducer;
