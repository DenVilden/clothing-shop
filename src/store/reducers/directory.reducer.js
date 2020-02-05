import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
} from '../types/directory.types';

const initialState = { sections: [], isFetching: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SECTIONS_START:
      return { ...state, isFetching: true };

    case FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: payload,
      };

    case FETCH_SECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        sections: null,
      };

    default:
      return state;
  }
};
