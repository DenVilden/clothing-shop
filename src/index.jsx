import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import AppContainer from './routes/App.container';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
