import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import {
  SIGN_OUT_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../../types/user.types';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from '../../types/cart.types';
import {
  clearCartAction,
  fetchCartItemsAction,
  fetchCartItemsErrorAction,
} from '../../actions/cart.actions';
import cartSagas, {
  clearCartOnSignOutSaga,
  fetchCartItemsOnSignInSaga,
  updateCartSaga,
  resetCartOnSignInFailure,
} from '../cart.sagas';
import { updateFirebaseCart } from '../../../api/firebase';
import { selectCartItems } from '../../selectors/cart.selectors';

describe('cartSagas', () => {
  it('should watch all sagas', () => {
    const gen = cartSagas();
    const eff = gen.next().value;
    expect(eff).toEqual(
      all([
        takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOutSaga),
        takeLatest(SIGN_IN_SUCCESS, fetchCartItemsOnSignInSaga),
        takeLatest(ADD_ITEM, updateCartSaga),
        takeLatest(REMOVE_ITEM, updateCartSaga),
        takeLatest(CLEAR_ITEM_FROM_CART, updateCartSaga),
        takeLatest(SIGN_IN_FAILURE, resetCartOnSignInFailure),
      ])
    );
  });
});

describe('clearCartOnSignOutSaga', () => {
  it('should call clearCartAction', () => {
    const gen = clearCartOnSignOutSaga();
    const eff = gen.next().value;
    const action = clearCartAction();
    expect(eff).toEqual(put(action));
  });
});

describe('resetCartOnSignInFailure', () => {
  it('should call fetchCartItemsErrorAction', () => {
    const gen = resetCartOnSignInFailure();
    const eff = gen.next().value;
    const action = fetchCartItemsErrorAction();
    expect(eff).toEqual(put(action));
  });
});

describe('fetchCartItemsOnSignInSaga', () => {
  const mockCartItems = [{ id: 1 }];
  const mockAction = { payload: { cartItems: mockCartItems } };

  const gen = fetchCartItemsOnSignInSaga(mockAction);

  it('should call fetchCartItemsAction', () => {
    const eff = gen.next().value;
    const action = fetchCartItemsAction(mockCartItems);
    expect(eff).toEqual(put(action));
  });

  it('should call fetchCartItemsErrorAction if error happens', () => {
    const newGen = fetchCartItemsOnSignInSaga(mockAction);
    newGen.next();
    const eff = newGen.throw().value;
    const action = fetchCartItemsErrorAction();
    expect(eff).toEqual(put(action));
  });
});

describe('updateCartSaga', () => {
  const gen = updateCartSaga();

  it('should call selectCartItems', () => {
    const eff = gen.next().value;
    expect(eff).toEqual(select(selectCartItems));
  });

  it('should call updateFirebaseCart', () => {
    const mockCartItems = [{ id: 1 }];
    const eff = gen.next(mockCartItems).value;
    expect(eff).toEqual(call(updateFirebaseCart, mockCartItems));
  });

  it('should call fetchCartItemsErrorAction if error happens', () => {
    const newGen = updateCartSaga();
    newGen.next();
    const eff = newGen.throw().value;
    const action = fetchCartItemsErrorAction();
    expect(eff).toEqual(put(action));
  });
});
