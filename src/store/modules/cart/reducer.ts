import { Reducer } from 'redux';

import { ICartState } from './type';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (prevState, action) => {
  console.log(prevState);
  console.log(action);

  return INITIAL_STATE;
};

export { cart };
