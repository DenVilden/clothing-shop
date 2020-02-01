import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
} from '../../../constants/directory.types';
import directoryReducer from '../directory.reducer';

describe('directoryReducer', () => {
  const initialState = { sections: [], isFetching: false, errorMessage: null };

  it('should return initial state', () => {
    const reducer = directoryReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should set isFetching to true when fetchSectionsStart fires', () => {
    const reducer = directoryReducer(initialState, {
      type: FETCH_SECTIONS_START,
    });
    expect(reducer).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  it('should set isFetching to false when fetchSectionsSuccess fires', () => {
    const mockItems = [{ title: 'hats' }, { title: 'jackets' }];
    const reducer = directoryReducer(initialState, {
      type: FETCH_SECTIONS_SUCCESS,
      payload: mockItems,
    });
    expect(reducer).toEqual({
      ...initialState,
      sections: mockItems,
      isFetching: false,
    });
  });

  it('should set error and isFetching to false if error happens', () => {
    const mockError = 'error';
    const reducer = directoryReducer(initialState, {
      type: FETCH_SECTIONS_FAILURE,
      payload: mockError,
    });
    expect(reducer).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: mockError,
    });
  });
});
