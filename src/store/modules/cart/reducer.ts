import { Reducer } from 'redux';
import produce from 'immer';

import { ICartState } from './type';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      // Essa função troca o conceito de imutabilidade por 'push'.
      produce(state, (draft) => {
        draft.items.push({
          product,
          quantity: 1,
        });
      });
    }

    default: {
      return state;
    }
  }
};

export { cart };
