import {
  FETCH_DIRECTORY_START,
  FETCH_DIRECTORY_SUCCESS,
  FETCH_DIRECTORY_FAILURE,
} from '../constants/directory.types';

const initialState = {
  sections: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DIRECTORY_START:
      return { ...state, isFetching: true };

    case FETCH_DIRECTORY_SUCCESS:
      return { ...state, isFetching: false, sections: payload };

    case FETCH_DIRECTORY_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };

    default:
      return state;
  }
};
