import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../types/shop.types';

export const fetchCollectionsStartAction = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccessAction = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailureAction = () => ({
  type: FETCH_COLLECTIONS_FAILURE,
});
