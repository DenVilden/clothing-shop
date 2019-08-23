import { selectCartItemsCount, selectCartTotal } from './cart.selectors';

describe('selectCartItemsCount selector', () => {
  it('should calculate total items in a cart', () => {
    const mockState = {
      cart: { cartItems: [{ id: 1, quantity: 4 }, { id: 2, quantity: 5 }] },
    };

    const selector = selectCartItemsCount(mockState);
    expect(selector).toBe(9);
  });

  it('should return 0 if there is no items in a cart', () => {
    const mockState = { cart: { cartItems: [] } };

    const selector = selectCartItemsCount(mockState);
    expect(selector).toBe(0);
  });
});

describe('selectCartTotal selector', () => {
  it('should calculate total price of items in a cart', () => {
    const mockState = {
      cart: {
        cartItems: [
          { id: 1, quantity: 4, price: 100 },
          { id: 2, quantity: 5, price: 50 },
        ],
      },
    };

    const selector = selectCartTotal(mockState);
    expect(selector).toBe(650);
  });

  it('should return 0 if there is no items in a cart', () => {
    const mockState = { cart: { cartItems: [] } };

    const selector = selectCartTotal(mockState);
    expect(selector).toBe(0);
  });
});
