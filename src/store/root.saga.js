import { all, call } from 'redux-saga/effects';
import shopSaga from '../sagas/shop.saga';
import userSaga from '../sagas/user.saga';
import cartSaga from '../sagas/cart.saga';
import directorySaga from '../sagas/directory.saga';

export default function* rootSaga() {
  yield all([
    call(shopSaga),
    call(userSaga),
    call(cartSaga),
    call(directorySaga),
  ]);
}
