import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from '../types/cart.types';

export const toggleCartHiddenAction = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItemAction = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItemAction = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearItemFromCartAction = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});
