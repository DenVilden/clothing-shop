import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../constants/shop.types';

const initialState = {
  collections: {},
  isFetching: false,
  errorMessage: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true, errorMessage: null };

    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
        errorMessage: null,
      };

    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };

    default:
      return state;
  }
};
