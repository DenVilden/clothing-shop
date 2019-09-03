import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../constants/user.types';

const initialState = { currentUser: null, errorMessage: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: { displayName: payload.displayName, email: payload.email },
        errorMessage: null,
      };

    case SIGN_OUT_SUCCESS:
    case SIGN_UP_SUCCESS:
      return { ...state, currentUser: null, errorMessage: null };

    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return { ...state, errorMessage: payload };

    default:
      return state;
  }
};
