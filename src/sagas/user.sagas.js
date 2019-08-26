import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
} from '../constants/user.types';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../api/firebase';
import {
  signInSuccessAction,
  signInFailureAction,
  signOutSuccessAction,
  signOutFailureAction,
  signUpSuccessAction,
  signUpFailureAction,
} from '../actions/user.actions';

export function* getSnapshotFromUserAuthSaga(userAuth, additionalData) {
  try {
    const userData = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    yield put(signInSuccessAction(userData));
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

export function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuthSaga(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

export function* signInWithEmailSaga({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuthSaga(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

export function* isUserAuthenticatedSaga() {
  try {
    const user = yield getCurrentUser();
    yield getSnapshotFromUserAuthSaga(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

export function* signOutSaga() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    yield put(signOutFailureAction(error.message));
  }
}

export function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccessAction());
    yield getSnapshotFromUserAuthSaga(user, { displayName });
  } catch (error) {
    yield put(signUpFailureAction(error.message));
  }
}

export default function*() {
  yield all([
    takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogleSaga),
    takeLatest(EMAIL_SIGN_IN_START, signInWithEmailSaga),
    takeLatest(CHECK_USER_SESSION, isUserAuthenticatedSaga),
    takeLatest(SIGN_OUT_START, signOutSaga),
    takeLatest(SIGN_UP_START, signUpSaga),
  ]);
}
