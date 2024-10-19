import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import cart from "./cart";
import order from "./order";
import product from "./product";
import adminAuth from "./adminAuth";

const rootReducer = combineReducers({
  auth: auth,
  cart: cart,
  order: order,
  product: product,
  adminAuth: adminAuth,
});

export default rootReducer;
