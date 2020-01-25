import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './root.reducer';
import saga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const logger = require('redux-logger').default;
  middlewares.push(logger);
}

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(saga);

export default store;
