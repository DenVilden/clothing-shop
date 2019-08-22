import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
} from '../constants/cart.types';
import {
  toggleCartHiddenAction,
  addItemAction,
  removeItemAction,
  clearItemFromCartAction,
  clearCartAction,
} from './cart.actions';

it('should setup toggle hidden action object', () => {
  const action = toggleCartHiddenAction();
  expect(action).toEqual({ type: TOGGLE_CART_HIDDEN });
});

it('should setup add item action object', () => {
  const mockItem = { id: 1 };

  const action = addItemAction(mockItem);
  expect(action).toEqual({ type: ADD_ITEM, payload: mockItem });
});

it('should setup remove item action object', () => {
  const mockItem = { id: 1 };

  const action = removeItemAction(mockItem);
  expect(action).toEqual({ type: REMOVE_ITEM, payload: mockItem });
});

it('should setup clear item from cart action object', () => {
  const mockItem = { id: 1 };

  const action = clearItemFromCartAction(mockItem);
  expect(action).toEqual({ type: CLEAR_ITEM_FROM_CART, payload: mockItem });
});

it('should setup clear cart action object', () => {
  const action = clearCartAction();
  expect(action).toEqual({ type: CLEAR_CART });
});
