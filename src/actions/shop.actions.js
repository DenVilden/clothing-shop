import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from '../types/shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../api/firebase';

export const fetchCollectionStartAction = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccessAction = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailureAction = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsyncAction = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionStartAction());

  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccessAction(collectionsMap));
    })
    .catch(({ message }) => dispatch(fetchCollectionFailureAction(message)));
};
