import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './root.reducer';
import saga from './root.saga';

export default async () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const logger = await import('redux-logger');
    middlewares.push(logger.default);
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);

  sagaMiddleware.run(saga);

  return store;
};
