import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
} from '../../../constants/directory.types';
import {
  fetchSectionsStartAction,
  fetchSectionsSuccessAction,
  fetchSectionsFailureAction,
} from '../directory.actions';

describe('fetchSections actions', () => {
  it('should setup fetchSectionsStart', () => {
    const action = fetchSectionsStartAction();
    expect(action).toEqual({ type: FETCH_SECTIONS_START });
  });

  it('should setup fetchSectionsSuccess', () => {
    const mockSectionsMap = [{ title: 'hats' }];
    const action = fetchSectionsSuccessAction(mockSectionsMap);
    expect(action).toEqual({
      type: FETCH_SECTIONS_SUCCESS,
      payload: mockSectionsMap,
    });
  });

  it('should setup fetchSectionsFailure', () => {
    const mockError = 'error';
    const action = fetchSectionsFailureAction(mockError);
    expect(action).toEqual({
      type: FETCH_SECTIONS_FAILURE,
      payload: mockError,
    });
  });
});
