import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../../types/shop.types';
import shopReducer from '../shop.reducer';

describe('shopReducer', () => {
  const initialState = {
    collections: {},
    isFetching: false,
  };

  it('should return initial state', () => {
    const reducer = shopReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should set isFetching to true when fetchCollectionsStart fires', () => {
    const reducer = shopReducer(initialState, {
      type: FETCH_COLLECTIONS_START,
    });
    expect(reducer).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  it('should set isFetching to false when fetchCollectionsSuccess fires', () => {
    const mockItems = { hats: { id: 34123 }, sneakers: { id: 4322 } };
    const reducer = shopReducer(initialState, {
      type: FETCH_COLLECTIONS_SUCCESS,
      payload: mockItems,
    });
    expect(reducer).toEqual({
      ...initialState,
      collections: mockItems,
      isFetching: false,
    });
  });

  it('should set error and data array to null if error happens', () => {
    const reducer = shopReducer(initialState, {
      type: FETCH_COLLECTIONS_FAILURE,
    });
    expect(reducer).toEqual({
      ...initialState,
      isFetching: false,
      collections: null,
    });
  });
});
