import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../../api/firebase';
import {
  fetchCollectionsSuccessAction,
  fetchCollectionsFailureAction,
} from '../../actions/shop.actions';
import { FETCH_COLLECTIONS_START } from '../../types/shop.types';
import shopSagas, { fetchCollectionsSaga } from '../shop.sagas';

describe('shopSagas', () => {
  it('should watch all sagas', () => {
    const gen = shopSagas();
    const eff = gen.next().value;
    expect(eff).toEqual(
      all([takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsSaga)])
    );
  });
});

describe('fetchCollectionsSaga', () => {
  const gen = fetchCollectionsSaga();

  it('should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    gen.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshotToMap', () => {
    const mockSnapshot = {};
    const eff = gen.next(mockSnapshot).value;
    expect(eff).toEqual(call(convertCollectionsSnapshotToMap, mockSnapshot));
  });

  it('should call fetchCollectionsSuccessAction', () => {
    const mockCollectionsMap = { hats: { id: 1 } };
    const eff = gen.next(mockCollectionsMap).value;
    const action = fetchCollectionsSuccessAction(mockCollectionsMap);
    expect(eff).toEqual(put(action));
  });

  it('should call fetchCollectionsFailureAction if error happens', () => {
    const newGen = fetchCollectionsSaga();
    newGen.next();
    const eff = newGen.throw().value;
    const action = fetchCollectionsFailureAction();
    expect(eff).toEqual(put(action));
  });
});
