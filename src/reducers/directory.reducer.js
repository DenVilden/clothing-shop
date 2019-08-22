import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
} from '../constants/directory.types';

const initialState = {
  sections: [],
  isFetching: false,
  errorMessage: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SECTIONS_START:
      return { ...state, isFetching: true, errorMessage: null };

    case FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: payload,
        errorMessage: null,
      };

    case FETCH_SECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };

    default:
      return state;
  }
};
