import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../api/firebase';
import {
  fetchCollectionsSuccessAction,
  fetchCollectionsFailureAction,
} from '../../actions/shop.actions';
import { FETCH_COLLECTIONS_START } from '../../constants/shop.types';
import shopSagas, { fetchCollectionsSaga } from '../../sagas/shop.sagas';

describe('shopSagas', () => {
  it('should listen to all sagas', () => {
    const gen = shopSagas();
    const eff = gen.next().value;

    expect(eff).toEqual(
      all([takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsSaga)])
    );
  });
});

describe('fetchCollections saga', () => {
  const gen = fetchCollectionsSaga();

  it('should return firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');

    gen.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should convert collections snapshot to map', () => {
    const mockSnapshot = {};
    const eff = gen.next(mockSnapshot).value;

    expect(eff).toEqual(call(convertCollectionsSnapshotToMap, mockSnapshot));
  });

  it('should dispatch data to the store', () => {
    const mockCollectionsMap = { hats: { id: 1 } };
    const eff = gen.next(mockCollectionsMap).value;
    const action = fetchCollectionsSuccessAction(mockCollectionsMap);

    expect(eff).toEqual(put(action));
  });

  it('should dispatch error to the store if error happens', () => {
    const newGen = fetchCollectionsSaga();

    newGen.next();

    const eff = newGen.throw({ message: 'error' }).value;
    const action = fetchCollectionsFailureAction('error');

    expect(eff).toEqual(put(action));
  });
});
