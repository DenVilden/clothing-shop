import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
} from '../constants/directory.types';
import {
  fetchSectionsStartAction,
  fetchSectionsSuccessAction,
  fetchSectionsFailureAction,
} from './directory.actions';

it('should setup fetch sections start action object', () => {
  const action = fetchSectionsStartAction();
  expect(action).toEqual({ type: FETCH_SECTIONS_START });
});

it('should setup fetch sections success action object', () => {
  const mockSectionsMap = [{ id: 1, title: 'hats' }];

  const action = fetchSectionsSuccessAction(mockSectionsMap);
  expect(action).toEqual({
    type: FETCH_SECTIONS_SUCCESS,
    payload: mockSectionsMap,
  });
});

it('should setup fetch sections failure action object', () => {
  const action = fetchSectionsFailureAction('error');
  expect(action).toEqual({ type: FETCH_SECTIONS_FAILURE, payload: 'error' });
});
