/** Cada ação que pode acontecer dentro do Reducer vai ser uma função */
import { IProduct } from './type';

function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}

export { addProductToCart };
