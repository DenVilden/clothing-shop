import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';

configureStore().then(store =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
);

serviceWorker.register();
