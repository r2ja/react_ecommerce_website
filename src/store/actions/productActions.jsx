// src/redux/actions/productActions.js
import { productService } from '../../services/productService';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../reducers/productReducer';

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const data = await productService.getProducts();
    dispatch(fetchProductsSuccess(data.products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};