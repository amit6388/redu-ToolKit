import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;
