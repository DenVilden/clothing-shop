import {
  FETCH_DIRECTORY_START,
  FETCH_DIRECTORY_SUCCESS,
  FETCH_DIRECTORY_FAILURE,
} from '../constants/directory.types';

export const fetchDirectoryStartAction = () => ({
  type: FETCH_DIRECTORY_START,
});

export const fetchDirectorySuccessAction = directoryMap => ({
  type: FETCH_DIRECTORY_SUCCESS,
  payload: directoryMap,
});

export const fetchDirectoryFailureAction = errorMessage => ({
  type: FETCH_DIRECTORY_FAILURE,
  payload: errorMessage,
});
