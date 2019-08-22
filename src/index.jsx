import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import App from './routes/App/App.container';
import * as serviceWorker from './serviceWorker';

const ReduxApp = AppComponent => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppComponent />
    </PersistGate>
  </Provider>
);

render(ReduxApp(App), document.getElementById('root'));

serviceWorker.register();
