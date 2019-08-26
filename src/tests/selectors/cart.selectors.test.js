import {
  selectCartHidden,
  selectCartItemsCount,
  selectCartTotal,
} from '../../selectors/cart.selectors';

describe('selectCartHidden selector', () => {
  it('should return hidden boolean', () => {
    const mockState = { cart: { hidden: true } };
    const selector = selectCartHidden(mockState);
    expect(selector).toBe(true);
  });
});

describe('selectCartItemsCount selector', () => {
  it('should return total number of items in cart', () => {
    const mockState = {
      cart: { cartItems: [{ quantity: 4 }, { quantity: 5 }] },
    };
    const selector = selectCartItemsCount(mockState);
    expect(selector).toBe(9);
  });

  it('should return 0 if there is no items in cart', () => {
    const mockState = { cart: { cartItems: [] } };
    const selector = selectCartItemsCount(mockState);
    expect(selector).toBe(0);
  });
});

describe('selectCartTotal selector', () => {
  it('should return total price of all items in cart', () => {
    const mockState = {
      cart: {
        cartItems: [{ quantity: 4, price: 100 }, { quantity: 5, price: 50 }],
      },
    };
    const selector = selectCartTotal(mockState);
    expect(selector).toBe(650);
  });

  it('should return 0 if there is no items in cart', () => {
    const mockState = { cart: { cartItems: [] } };
    const selector = selectCartTotal(mockState);
    expect(selector).toBe(0);
  });
});
