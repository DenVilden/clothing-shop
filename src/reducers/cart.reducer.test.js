import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
} from '../constants/cart.types';
import cartReducer from './cart.reducer';

describe('cart reducer', () => {
  const initialState = {
    cartItems: [],
    hidden: true,
  };

  it('should return initial state', () => {
    const reducer = cartReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should handle toggleCartHidden action', () => {
    const reducer = cartReducer(initialState, { type: TOGGLE_CART_HIDDEN });
    expect(reducer).toEqual({ ...initialState, hidden: false });
  });

  it('should add new item to a cart', () => {
    const mockItem = { id: 1 };

    const reducer = cartReducer(initialState, {
      type: ADD_ITEM,
      payload: mockItem,
    });

    expect(reducer).toEqual({
      ...initialState,
      cartItems: [{ id: 1, quantity: 1 }],
    });
  });

  it('should increase quantity of matching item by 1', () => {
    const mockItem = { id: 1, quantity: 3 };

    const mockState = {
      ...initialState,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    const reducer = cartReducer(mockState, {
      type: ADD_ITEM,
      payload: mockItem,
    });

    expect(reducer).toEqual({
      ...initialState,
      cartItems: [{ id: 1, quantity: 4 }, { id: 2, quantity: 1 }],
    });
  });

  it('should decrease quantity of matching item by 1 if quantity is > 1', () => {
    const mockItem = { id: 1, quantity: 3 };

    const mockState = {
      ...initialState,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    const reducer = cartReducer(mockState, {
      type: REMOVE_ITEM,
      payload: mockItem,
    });

    expect(reducer).toEqual({
      ...initialState,
      cartItems: [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }],
    });
  });

  it('should remove matching item if quantity is 1', () => {
    const mockItem = { id: 1, quantity: 1 };

    const mockState = {
      ...initialState,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    const reducer = cartReducer(mockState, {
      type: REMOVE_ITEM,
      payload: mockItem,
    });

    expect(reducer).toEqual({
      ...initialState,
      cartItems: [{ id: 2, quantity: 1 }],
    });
  });

  it('should remove requested item from a cart', () => {
    const mockItem = { id: 1, quantity: 3 };

    const mockState = {
      ...initialState,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    const reducer = cartReducer(mockState, {
      type: CLEAR_ITEM_FROM_CART,
      payload: mockItem,
    });

    expect(reducer).toEqual({
      ...initialState,
      cartItems: [{ id: 2, quantity: 1 }],
    });
  });

  it('should clear cart completely', () => {
    const mockState = {
      ...initialState,
      cartItems: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }],
    };

    const reducer = cartReducer(mockState, { type: CLEAR_CART });

    expect(reducer).toEqual(initialState);
  });
});
