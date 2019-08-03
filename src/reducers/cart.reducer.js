import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from '../types/cart.types';
import { addItemToCard, removeItemFromCard } from '../utils/cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM:
      return { ...state, cartItems: addItemToCard(state.cartItems, payload) };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCard(state.cartItems, payload)
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        )
      };

    default:
      return state;
  }
};
