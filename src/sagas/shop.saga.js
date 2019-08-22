import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../constants/shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../api/firebase';
import {
  fetchCollectionsSuccessAction,
  fetchCollectionsFailureAction,
} from '../actions/shop.actions';

function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections');
    const snapshot = yield collectionsRef.orderBy('items').get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccessAction(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailureAction(error.message));
  }
}

function* fetchCollectionsStartAction() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export default function* shopSaga() {
  yield all([call(fetchCollectionsStartAction)]);
}
