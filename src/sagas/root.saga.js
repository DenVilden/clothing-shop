import { all, call } from 'redux-saga/effects';
import shopSaga from './shop.saga';
import userSaga from './user.saga';

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga)]);
}
