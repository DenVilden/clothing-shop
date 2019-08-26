import { takeLatest, put, all, select, call } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } from '../constants/user.types';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from '../constants/cart.types';
import {
  clearCartAction,
  fetchCartItemsAction,
  fetchCartItemsErrorAction,
  updateCartItemsAction,
} from '../actions/cart.actions';
import { selectCartItems } from '../selectors/cart.selectors';
import { updateFirebaseCart, getFirebaseCart } from '../api/firebase';

export function* clearCartOnSignOutSaga() {
  yield put(clearCartAction());
}

export function* fetchCartItemsOnSignInSaga() {
  try {
    const cartItems = yield call(getFirebaseCart);
    yield put(fetchCartItemsAction(cartItems));
  } catch (error) {
    yield put(fetchCartItemsErrorAction(error.message));
  }
}

export function* updateCartSaga() {
  const cartItems = yield select(selectCartItems);
  try {
    yield call(updateFirebaseCart, cartItems);
    yield put(updateCartItemsAction());
  } catch (error) {
    yield put(fetchCartItemsErrorAction(error.message));
  }
}

export default function*() {
  yield all([
    takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOutSaga),
    takeLatest(SIGN_IN_SUCCESS, fetchCartItemsOnSignInSaga),
    takeLatest(ADD_ITEM, updateCartSaga),
    takeLatest(REMOVE_ITEM, updateCartSaga),
    takeLatest(CLEAR_ITEM_FROM_CART, updateCartSaga),
  ]);
}
