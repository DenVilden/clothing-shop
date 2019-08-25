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

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* signInWithEmailSaga({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* isUserAuthenticatedSaga() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* signOutSaga() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    yield put(signOutFailureAction(error.message));
  }
}

function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccessAction());
    yield getSnapshotFromUserAuth(user, { displayName });
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
