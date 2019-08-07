import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../constants/user.types';

export const googleSignInStartAction = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStartAction = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccessAction = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailureAction = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSessionAction = () => ({
  type: CHECK_USER_SESSION
});

export const signOutStartAction = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccessAction = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailureAction = error => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStartAction = emailAndPasswordAndName => ({
  type: SIGN_UP_START,
  payload: emailAndPasswordAndName
});

export const signUpSuccessAction = () => ({
  type: SIGN_UP_SUCCESS
});

export const signUpFailureAction = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});