import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_OUT_FAILURE,
} from '../../constants/user.types';
import userReducer from '../../reducers/user.reducer';

describe('userReducer', () => {
  const initialState = {
    currentUser: null,
    errorMessage: null,
  };

  it('should return initial state', () => {
    const reducer = userReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should set user data when signInSuccess fires', () => {
    const mockEmail = '123@mail.com';
    const mockName = 'ivan';
    const mockUser = {
      id: 'hfd234',
      email: mockEmail,
      displayName: mockName,
    };
    const reducer = userReducer(initialState, {
      type: SIGN_IN_SUCCESS,
      payload: mockUser,
    });
    expect(reducer).toEqual({
      ...initialState,
      currentUser: { email: mockEmail, displayName: mockName },
    });
  });

  it('should clear user data when signOutSuccess fires', () => {
    const reducer = userReducer(initialState, { type: SIGN_OUT_SUCCESS });
    expect(reducer).toEqual(initialState);
  });

  it('should set error if error happens', () => {
    const mockError = 'error';
    const signIn = userReducer(initialState, {
      type: SIGN_IN_FAILURE,
      payload: mockError,
    });
    const signUp = userReducer(initialState, {
      type: SIGN_UP_FAILURE,
      payload: mockError,
    });
    const signOut = userReducer(initialState, {
      type: SIGN_OUT_FAILURE,
      payload: mockError,
    });
    expect(signIn).toEqual({ ...initialState, errorMessage: mockError });
    expect(signUp).toEqual({ ...initialState, errorMessage: mockError });
    expect(signOut).toEqual({ ...initialState, errorMessage: mockError });
  });
});
