import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } from '../../constants/user.types';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from '../../constants/cart.types';
import {
  clearCartAction,
  fetchCartItemsAction,
  fetchCartItemsErrorAction,
  updateCartItemsAction,
} from '../../actions/cart.actions';
import cartSagas, {
  clearCartOnSignOutSaga,
  fetchCartItemsOnSignInSaga,
  updateCartSaga,
} from '../../sagas/cart.sagas';
import { getFirebaseCart, updateFirebaseCart } from '../../api/firebase';
import { selectCartItems } from '../../selectors/cart.selectors';

describe('cartSagas', () => {
  it('should listen to all sagas', () => {
    const gen = cartSagas();
    const eff = gen.next().value;
    expect(eff).toEqual(
      all([
        takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOutSaga),
        takeLatest(SIGN_IN_SUCCESS, fetchCartItemsOnSignInSaga),
        takeLatest(ADD_ITEM, updateCartSaga),
        takeLatest(REMOVE_ITEM, updateCartSaga),
        takeLatest(CLEAR_ITEM_FROM_CART, updateCartSaga),
      ])
    );
  });
});

describe('clearCartOnSignOutSaga', () => {
  it('should clearCart on signOut', () => {
    const gen = clearCartOnSignOutSaga();
    const eff = gen.next().value;
    const action = clearCartAction();
    expect(eff).toEqual(put(action));
  });
});

describe('fetchCartItemsOnSignInSaga', () => {
  const gen = fetchCartItemsOnSignInSaga();

  it('should call firestore cart items', () => {
    const eff = gen.next().value;
    expect(eff).toEqual(call(getFirebaseCart));
  });

  it('should dispatch data to the store', () => {
    const mockCartItems = [{ id: 1 }];
    const eff = gen.next(mockCartItems).value;
    const action = fetchCartItemsAction(mockCartItems);
    expect(eff).toEqual(put(action));
  });

  it('should dispatch error to the store if error happens', () => {
    const newGen = fetchCartItemsOnSignInSaga();
    newGen.next();
    const eff = newGen.throw({ message: 'error' }).value;
    const action = fetchCartItemsErrorAction('error');
    expect(eff).toEqual(put(action));
  });
});

describe('updateCartSaga', () => {
  const gen = updateCartSaga();

  it('should select store cart items', () => {
    const eff = gen.next().value;
    expect(eff).toEqual(select(selectCartItems));
  });

  it('should call firestore cart items', () => {
    const mockCartItems = [{ id: 1 }];
    const eff = gen.next(mockCartItems).value;
    expect(eff).toEqual(call(updateFirebaseCart, mockCartItems));
  });

  it('should dispatch updateCartItemsAction to the store', () => {
    const eff = gen.next().value;
    expect(eff).toEqual(put(updateCartItemsAction()));
  });

  it('should dispatch error to the store if error happens', () => {
    const newGen = updateCartSaga();
    newGen.next();
    newGen.next();
    const eff = newGen.throw({ message: 'error' }).value;
    const action = fetchCartItemsErrorAction('error');
    expect(eff).toEqual(put(action));
  });
});
