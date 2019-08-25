import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertSectionsSnapshotToMap } from '../../api/firebase';
import {
  fetchSectionsSuccessAction,
  fetchSectionsFailureAction,
} from '../../actions/directory.actions';
import { FETCH_SECTIONS_START } from '../../constants/directory.types';
import directorySagas, { fetchSectionsSaga } from '../../sagas/directory.sagas';

describe('directorySagas', () => {
  it('should listen to all sagas', () => {
    const gen = directorySagas();
    const eff = gen.next().value;

    expect(eff).toEqual(
      all([takeLatest(FETCH_SECTIONS_START, fetchSectionsSaga)])
    );
  });
});

describe('fetchSectionsSaga', () => {
  const gen = fetchSectionsSaga();

  it('should return firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');

    gen.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should convert sections snapshot to map', () => {
    const mockSnapshot = {};
    const eff = gen.next(mockSnapshot).value;

    expect(eff).toEqual(call(convertSectionsSnapshotToMap, mockSnapshot));
  });

  it('should dispatch data to the store', () => {
    const mockSectionsMap = [{ title: 'hats' }];
    const eff = gen.next(mockSectionsMap).value;
    const action = fetchSectionsSuccessAction(mockSectionsMap);

    expect(eff).toEqual(put(action));
  });

  it('should dispatch error to the store if error happens', () => {
    const newGen = fetchSectionsSaga();

    newGen.next();

    const eff = newGen.throw({ message: 'error' }).value;
    const action = fetchSectionsFailureAction('error');

    expect(eff).toEqual(put(action));
  });
});
