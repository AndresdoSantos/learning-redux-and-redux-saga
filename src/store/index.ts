import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { ICartState } from './modules/cart/type';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => middlewares,
});

sagaMiddleware.run(rootSaga);
