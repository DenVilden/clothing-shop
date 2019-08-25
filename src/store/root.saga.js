import { all, call } from 'redux-saga/effects';
import shopSagas from '../sagas/shop.sagas';
import userSagas from '../sagas/user.sagas';
import cartSagas from '../sagas/cart.sagas';
import directorySagas from '../sagas/directory.sagas';

export default function*() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
    call(directorySagas),
  ]);
}
