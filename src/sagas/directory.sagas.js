import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_SECTIONS_START } from '../constants/directory.types';
import { firestore, convertSectionsSnapshotToMap } from '../api/firebase';
import {
  fetchSectionsSuccessAction,
  fetchSectionsFailureAction,
} from '../actions/directory.actions';

export function* fetchSectionsSaga() {
  try {
    const sectionsRef = firestore.collection('sections');
    const snapshot = yield sectionsRef.orderBy('id').get();
    const sectionsMap = yield call(convertSectionsSnapshotToMap, snapshot);
    yield put(fetchSectionsSuccessAction(sectionsMap));
  } catch (error) {
    yield put(fetchSectionsFailureAction(error.message));
  }
}

export default function*() {
  yield all([takeLatest(FETCH_SECTIONS_START, fetchSectionsSaga)]);
}
