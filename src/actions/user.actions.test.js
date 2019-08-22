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
} from '../constants/user.types';
import {
  googleSignInStartAction,
  emailSignInStartAction,
  signInSuccessAction,
  signInFailureAction,
  checkUserSessionAction,
  signOutStartAction,
  signOutSuccessAction,
  signOutFailureAction,
  signUpStartAction,
  signUpSuccessAction,
  signUpFailureAction,
} from './user.actions';

it('should should setup google sign in start action object', () => {
  const action = googleSignInStartAction();
  expect(action).toEqual({ type: GOOGLE_SIGN_IN_START });
});

it('should should setup email sign in start action object', () => {
  const mockUserCredentials = { email: '123@mail.com', password: 123 };

  const action = emailSignInStartAction(mockUserCredentials);
  expect(action).toEqual({
    type: EMAIL_SIGN_IN_START,
    payload: mockUserCredentials,
  });
});

it('should setup sign in success action object', () => {
  const mockUser = { id: 'hfd234', email: '123@mail.com', displayName: 'ivan' };

  const action = signInSuccessAction(mockUser);
  expect(action).toEqual({ type: SIGN_IN_SUCCESS, payload: mockUser });
});

it('should setup sign in failure action object', () => {
  const action = signInFailureAction('error');
  expect(action).toEqual({ type: SIGN_IN_FAILURE, payload: 'error' });
});

it('should setup check user session action object', () => {
  const action = checkUserSessionAction();
  expect(action).toEqual({ type: CHECK_USER_SESSION });
});

it('should setup sign out start action object', () => {
  const action = signOutStartAction();
  expect(action).toEqual({ type: SIGN_OUT_START });
});

it('should setup sign out success action object', () => {
  const action = signOutSuccessAction();
  expect(action).toEqual({ type: SIGN_OUT_SUCCESS });
});

it('should setup sign out failure action object', () => {
  const action = signOutFailureAction('error');
  expect(action).toEqual({ type: SIGN_OUT_FAILURE, payload: 'error' });
});

it('should setup sign up start action object', () => {
  const mockUserCredentials = {
    email: '123@mail.com',
    password: 123,
    displayName: 'ivan',
  };

  const action = signUpStartAction(mockUserCredentials);
  expect(action).toEqual({ type: SIGN_UP_START, payload: mockUserCredentials });
});

it('should sign up success action object', () => {
  const action = signUpSuccessAction();
  expect(action).toEqual({ type: SIGN_UP_SUCCESS });
});

it('should setup sign up failure action object', () => {
  const action = signUpFailureAction('error');
  expect(action).toEqual({ type: SIGN_UP_FAILURE, payload: 'error' });
});
