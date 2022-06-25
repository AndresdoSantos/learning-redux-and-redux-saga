/** Cada ação que pode acontecer dentro do Reducer vai ser uma função */
import { IProduct } from './type';

function addProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  };
}

function addProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    },
  };
}

function addProductToCartFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    },
  };
}

export {
  addProductToCartRequest,
  addProductToCartFailure,
  addProductToCartSuccess,
};
