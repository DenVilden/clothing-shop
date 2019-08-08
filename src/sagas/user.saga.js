import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START
} from '../constants/user.types';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../api/firebase';
import {
  signInSuccessAction,
  signInFailureAction,
  signOutSuccessAction,
  signOutFailureAction,
  signUpSuccessAction,
  signUpFailureAction
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

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    yield put(signOutFailureAction(error.message));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccessAction());
    yield getSnapshotFromUserAuth(user, { displayName });
  } catch (error) {
    yield put(signUpFailureAction(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSessions() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSessions),
    call(onSignOutStart),
    call(onSignUpStart)
  ]);
}
