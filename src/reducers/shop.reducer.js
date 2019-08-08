import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from '../constants/shop.types';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };

    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: payload };

    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };

    default:
      return state;
  }
};
