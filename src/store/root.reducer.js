import { combineReducers } from 'redux';
import userReducer from '../reducers/user.reducer';
import cartReducer from '../reducers/cart.reducer';
import directoryReducer from '../reducers/directory.reducer';
import shopReducer from '../reducers/shop.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
