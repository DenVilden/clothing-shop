import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from '../reducers/user.reducer';
import cartReducer from '../reducers/cart.reducer';
import directoryReducer from '../reducers/directory.reducer';
import shopReducer from '../reducers/shop.reducer';

const persistConfig = { key: 'cart', storage, whitelist: ['cart'] };

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
