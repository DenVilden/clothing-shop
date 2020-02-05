import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../types/shop.types';

const initialState = { collections: {}, isFetching: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };

    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
      };

    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        collections: null,
      };

    default:
      return state;
  }
};
