import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../constants/user.types';

const initialState = {
  currentUser: null,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, error: null };

    case SIGN_IN_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};
