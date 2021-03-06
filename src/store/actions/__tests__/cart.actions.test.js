import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_ERROR,
} from '../../types/cart.types';
import {
  toggleCartHiddenAction,
  addItemAction,
  removeItemAction,
  clearItemFromCartAction,
  clearCartAction,
  fetchCartItemsAction,
  fetchCartItemsErrorAction,
} from '../cart.actions';

describe('cart actions', () => {
  it('should setup toggleCartHidden', () => {
    const action = toggleCartHiddenAction();
    expect(action).toEqual({ type: TOGGLE_CART_HIDDEN });
  });

  it('should setup addItem', () => {
    const mockItem = { id: 1 };
    const action = addItemAction(mockItem);
    expect(action).toEqual({ type: ADD_ITEM, payload: mockItem });
  });

  it('should setup removeItem', () => {
    const mockItem = { id: 1 };
    const action = removeItemAction(mockItem);
    expect(action).toEqual({ type: REMOVE_ITEM, payload: mockItem });
  });

  it('should setup clearItemFromCart', () => {
    const mockItem = { id: 1 };
    const action = clearItemFromCartAction(mockItem);
    expect(action).toEqual({ type: CLEAR_ITEM_FROM_CART, payload: mockItem });
  });

  it('should setup clearCart', () => {
    const action = clearCartAction();
    expect(action).toEqual({ type: CLEAR_CART });
  });

  it('should setup fetchCartItems', () => {
    const mockCartItems = [{ id: 1 }];
    const action = fetchCartItemsAction(mockCartItems);
    expect(action).toEqual({
      type: FETCH_CART_ITEMS_SUCCESS,
      payload: mockCartItems,
    });
  });

  it('should setup fetchCartItemsError', () => {
    const action = fetchCartItemsErrorAction();
    expect(action).toEqual({ type: FETCH_CART_ITEMS_ERROR });
  });
});
