import { Reducer } from 'redux';

import { ICartState } from './type';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = () => {
  return INITIAL_STATE;
};

export { cart };
