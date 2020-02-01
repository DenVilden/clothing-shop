import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import shopSagas from './sagas/shop.sagas';
import userSagas from './sagas/user.sagas';
import cartSagas from './sagas/cart.sagas';
import directorySagas from './sagas/directory.sagas';
import userReducer from './reducers/user.reducer';
import cartReducer from './reducers/cart.reducer';
import directoryReducer from './reducers/directory.reducer';
import shopReducer from './reducers/shop.reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const logger = require('redux-logger').default;
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
    call(directorySagas),
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
