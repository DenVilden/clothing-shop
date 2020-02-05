import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../../types/shop.types';
import {
  fetchCollectionsStartAction,
  fetchCollectionsSuccessAction,
  fetchCollectionsFailureAction,
} from '../shop.actions';

describe('fetchCollections actions', () => {
  it('should setup fetchCollectionsStart', () => {
    const action = fetchCollectionsStartAction();
    expect(action).toEqual({ type: FETCH_COLLECTIONS_START });
  });

  it('should setup fetchCollectionsSuccess', () => {
    const mockCollectionsMap = { hats: { id: 1 } };
    const action = fetchCollectionsSuccessAction(mockCollectionsMap);
    expect(action).toEqual({
      type: FETCH_COLLECTIONS_SUCCESS,
      payload: mockCollectionsMap,
    });
  });

  it('should setup fetchCollectionsFailure', () => {
    const action = fetchCollectionsFailureAction();
    expect(action).toEqual({
      type: FETCH_COLLECTIONS_FAILURE,
    });
  });
});
