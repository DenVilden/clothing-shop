import { takeLatest, put, all, select, call } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } from '../types/user.types';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from '../types/cart.types';
import {
  clearCartAction,
  fetchCartItemsAction,
  fetchCartItemsErrorAction,
} from '../actions/cart.actions';
import { selectCartItems } from '../selectors/cart.selectors';
import { updateFirebaseCart } from '../../api/firebase';

export function* clearCartOnSignOutSaga() {
  yield put(clearCartAction());
}

export function* fetchCartItemsOnSignInSaga({ payload: { cartItems } }) {
  try {
    yield put(fetchCartItemsAction(cartItems));
  } catch (error) {
    yield put(fetchCartItemsErrorAction(error.message));
  }
}

export function* updateCartSaga() {
  try {
    const cartItems = yield select(selectCartItems);
    yield call(updateFirebaseCart, cartItems);
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
