/** Cada ação que pode acontecer dentro do Reducer vai ser uma função */
import { ActionTypes, IProduct } from './type';

function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
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
