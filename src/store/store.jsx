// src/redux/store.js or src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    // Add other reducers here if you have any
  },
  // Redux Toolkit includes thunk middleware by default, so we don't need to add it explicitly
});

export default store;