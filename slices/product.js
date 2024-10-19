import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    addProductDetails: (state, action) => {
      return action.payload;
    },
    removeProductDetails: (state, action) => {
      return {};
    },
  },
});
export default productSlice.reducer;
export const { addProductDetails, removeProductDetails } = productSlice.actions;
export const getProductDetails = (state) => state.product;
