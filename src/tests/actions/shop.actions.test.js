import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../../constants/shop.types';
import {
  fetchCollectionsStartAction,
  fetchCollectionsSuccessAction,
  fetchCollectionsFailureAction,
} from '../../actions/shop.actions';

describe('fetch collections actions', () => {
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
    const mockError = 'error';
    const action = fetchCollectionsFailureAction(mockError);
    expect(action).toEqual({
      type: FETCH_COLLECTIONS_FAILURE,
      payload: mockError,
    });
  });
});
