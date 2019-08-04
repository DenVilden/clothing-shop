import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
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
