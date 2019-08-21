import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_DIRECTORY_START } from '../constants/directory.types';
import { firestore, convertDirectorySnapshotToMap } from '../api/firebase';
import {
  fetchDirectorySuccessAction,
  fetchDirectoryFailureAction,
} from '../actions/directory.actions';

function* fetchDirectoryAsync() {
  try {
    const directoryRef = firestore.collection('directory');
    const snapshot = yield directoryRef.orderBy('id').get();

    const directoryMap = yield call(convertDirectorySnapshotToMap, snapshot);
    yield put(fetchDirectorySuccessAction(directoryMap));
  } catch (error) {
    yield put(fetchDirectoryFailureAction(error.message));
  }
}

function* fetchDirectoryStart() {
  yield takeLatest(FETCH_DIRECTORY_START, fetchDirectoryAsync);
}

export default function* directorySaga() {
  yield all([call(fetchDirectoryStart)]);
}
