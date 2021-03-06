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
  SIGN_UP_FAILURE,
} from '../types/user.types';

export const googleSignInStartAction = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStartAction = (userCredentials) => ({
  type: EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccessAction = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailureAction = () => ({
  type: SIGN_IN_FAILURE,
});

export const checkUserSessionAction = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStartAction = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccessAction = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailureAction = () => ({
  type: SIGN_OUT_FAILURE,
});

export const signUpStartAction = (userCredentials) => ({
  type: SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccessAction = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailureAction = () => ({
  type: SIGN_UP_FAILURE,
});
