import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_ERROR,
} from '../constants/cart.types';
import { addItemToCard, removeItemFromCard } from './cart.reducer.utils';

const initialState = {
  cartItems: [],
  hidden: true,
  errorMessage: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCard(state.cartItems, payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCard(state.cartItems, payload),
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        ),
      };

    case CLEAR_CART:
      return { ...state, cartItems: [] };

    case FETCH_CART_ITEMS_SUCCESS:
      return { ...state, cartItems: payload || [], errorMessage: null };

    case FETCH_CART_ITEMS_ERROR:
      return { ...state, errorMessage: payload };

    default:
      return state;
  }
};
