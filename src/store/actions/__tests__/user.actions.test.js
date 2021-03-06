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
} from '../../types/user.types';
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
} from '../user.actions';

describe('user actions', () => {
  it('should setup checkUserSession', () => {
    const action = checkUserSessionAction();
    expect(action).toEqual({ type: CHECK_USER_SESSION });
  });
});

describe('signUp actions', () => {
  it('should setup signUpStart', () => {
    const mockUserCredentials = {
      email: '123@mail.com',
      password: '123',
      displayName: 'ivan',
    };
    const action = signUpStartAction(mockUserCredentials);
    expect(action).toEqual({
      type: SIGN_UP_START,
      payload: mockUserCredentials,
    });
  });

  it('should setup signUpSuccess', () => {
    const action = signUpSuccessAction();
    expect(action).toEqual({ type: SIGN_UP_SUCCESS });
  });

  it('should setup signUpFailure', () => {
    const action = signUpFailureAction();
    expect(action).toEqual({ type: SIGN_UP_FAILURE });
  });
});

describe('signIn actions', () => {
  const mockUser = {
    id: 'hfd234',
    email: '123@mail.com',
    displayName: 'ivan',
  };

  it('should setup googleSignInStart', () => {
    const action = googleSignInStartAction();
    expect(action).toEqual({ type: GOOGLE_SIGN_IN_START });
  });

  it('should setup setupEmailSignInStart', () => {
    const action = emailSignInStartAction(mockUser);
    expect(action).toEqual({
      type: EMAIL_SIGN_IN_START,
      payload: mockUser,
    });
  });

  it('should setup signInSuccess', () => {
    const action = signInSuccessAction(mockUser);
    expect(action).toEqual({ type: SIGN_IN_SUCCESS, payload: mockUser });
  });

  it('should setup signInFailure', () => {
    const action = signInFailureAction();
    expect(action).toEqual({ type: SIGN_IN_FAILURE });
  });
});

describe('signOut actions', () => {
  it('should setup signOutStart', () => {
    const action = signOutStartAction();
    expect(action).toEqual({ type: SIGN_OUT_START });
  });

  it('should setup signOutSuccess', () => {
    const action = signOutSuccessAction();
    expect(action).toEqual({ type: SIGN_OUT_SUCCESS });
  });

  it('should setup signOutFailure', () => {
    const action = signOutFailureAction();
    expect(action).toEqual({ type: SIGN_OUT_FAILURE });
  });
});
