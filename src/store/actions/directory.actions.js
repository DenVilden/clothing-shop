import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
} from '../types/directory.types';

export const fetchSectionsStartAction = () => ({
  type: FETCH_SECTIONS_START,
});

export const fetchSectionsSuccessAction = sectionsMap => ({
  type: FETCH_SECTIONS_SUCCESS,
  payload: sectionsMap,
});

export const fetchSectionsFailureAction = () => ({
  type: FETCH_SECTIONS_FAILURE,
});
