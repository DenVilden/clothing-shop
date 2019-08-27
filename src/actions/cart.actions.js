import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_ERROR,
} from '../constants/cart.types';

export const toggleCartHiddenAction = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItemAction = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemAction = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCartAction = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCartAction = () => ({
  type: CLEAR_CART,
});

export const fetchCartItemsAction = cartItems => ({
  type: FETCH_CART_ITEMS_SUCCESS,
  payload: cartItems,
});

export const fetchCartItemsErrorAction = errorMessage => ({
  type: FETCH_CART_ITEMS_ERROR,
  payload: errorMessage,
});
