import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      return action.payload;
    },
    removeOrder: (state, action) => {
      return [];
    },
  },
});

export default orderSlice.reducer;
export const { addOrder, removeOrder } = orderSlice.actions;
export const getOrders = (state) => state.order;
