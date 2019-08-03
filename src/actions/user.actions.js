import { SET_CURRENT_USER } from '../types/user.types';

// eslint-disable-next-line import/prefer-default-export
export const setCurrentUserAction = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
