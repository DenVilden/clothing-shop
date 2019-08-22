import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../constants/shop.types';
import {
  fetchCollectionsStartAction,
  fetchCollectionsSuccessAction,
  fetchCollectionsFailureAction,
} from './shop.actions';

it('should setup fetch collections start action object', () => {
  const action = fetchCollectionsStartAction();
  expect(action).toEqual({ type: FETCH_COLLECTIONS_START });
});

it('should setup fetch collections success action object', () => {
  const mockCollectionsMap = { hats: { id: 1 } };

  const action = fetchCollectionsSuccessAction(mockCollectionsMap);
  expect(action).toEqual({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: mockCollectionsMap,
  });
});

it('should setup fetch collections failure action object', () => {
  const action = fetchCollectionsFailureAction('error');
  expect(action).toEqual({ type: FETCH_COLLECTIONS_FAILURE, payload: 'error' });
});
