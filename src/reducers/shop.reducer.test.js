import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../constants/shop.types';
import shopReducer from './shop.reducer';

const initialState = {
  collections: [],
  isFetching: false,
  errorMessage: null,
};

it('should return initial state', () => {
  const reducer = shopReducer(undefined, {});
  expect(reducer).toEqual(initialState);
});

it('should set isFetching to true when fetch collections start fires', () => {
  const reducer = shopReducer(initialState, { type: FETCH_COLLECTIONS_START });
  expect(reducer).toEqual({ ...initialState, isFetching: true });
});

it('should set isFetching to false when fetch collections success fires', () => {
  const mockItems = { hats: { id: '34123' }, sneakers: { id: '4322' } };

  const reducer = shopReducer(initialState, {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: mockItems,
  });

  expect(reducer).toEqual({
    ...initialState,
    isFetching: false,
    collections: mockItems,
  });
});

it('should set isFetching to false if fetch collections failure fires', () => {
  const reducer = shopReducer(initialState, {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: 'error',
  });

  expect(reducer).toEqual({
    ...initialState,
    isFetching: false,
    errorMessage: 'error',
  });
});
