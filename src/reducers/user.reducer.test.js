import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_OUT_FAILURE,
} from '../constants/user.types';
import userReducer from './user.reducer';

describe('user reducer', () => {
  const initialState = {
    currentUser: null,
    errorMessage: null,
  };

  it('should return initial state', () => {
    const reducer = userReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should handle sign in success action', () => {
    const mockUser = {
      id: 'hfd234',
      email: '123@mail.com',
      displayName: 'ivan',
    };

    const reducer = userReducer(initialState, {
      type: SIGN_IN_SUCCESS,
      payload: mockUser,
    });

    expect(reducer).toEqual({ ...initialState, currentUser: mockUser });
  });

  it('should handle sign out success action', () => {
    const reducer = userReducer(initialState, {
      type: SIGN_OUT_SUCCESS,
    });
    expect(reducer).toEqual(initialState);
  });

  it('should set error message if error happens', () => {
    const mockError = 'error';

    const signInReducer = userReducer(initialState, {
      type: SIGN_IN_FAILURE,
      payload: mockError,
    });

    const signUpReducer = userReducer(initialState, {
      type: SIGN_UP_FAILURE,
      payload: mockError,
    });

    const signOutReducer = userReducer(initialState, {
      type: SIGN_OUT_FAILURE,
      payload: mockError,
    });

    expect(signInReducer).toEqual({ ...initialState, errorMessage: mockError });
    expect(signUpReducer).toEqual({ ...initialState, errorMessage: mockError });
    expect(signOutReducer).toEqual({
      ...initialState,
      errorMessage: mockError,
    });
  });
});
