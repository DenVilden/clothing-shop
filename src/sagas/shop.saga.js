import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../constants/shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../api/firebase';
import {
  fetchCollectionSuccessAction,
  fetchCollectionFailureAction
} from '../actions/shop.actions';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccessAction(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailureAction(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export default function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
