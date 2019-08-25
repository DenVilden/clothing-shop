import { takeLatest, put, all } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../constants/user.types';
import { clearCartAction } from '../actions/cart.actions';

export function* clearCartOnSignOutSaga() {
  yield put(clearCartAction());
}

export default function*() {
  yield all([takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOutSaga)]);
}
