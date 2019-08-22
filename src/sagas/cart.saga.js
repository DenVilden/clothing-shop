import { takeLatest, call, put, all } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../constants/user.types';
import { clearCartAction } from '../actions/cart.actions';

function* clearCartOnSignOut() {
  yield put(clearCartAction());
}

function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
