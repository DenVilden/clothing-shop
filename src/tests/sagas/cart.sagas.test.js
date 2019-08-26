import { takeLatest, put, all } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../../constants/user.types';
import { clearCartAction } from '../../actions/cart.actions';
import cartSagas, { clearCartOnSignOutSaga } from '../../sagas/cart.sagas';

describe('cartSagas', () => {
  it('should listen to all sagas', () => {
    const gen = cartSagas();
    const eff = gen.next().value;
    expect(eff).toEqual(
      all([takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOutSaga)])
    );
  });
});

describe('clearCartOnSignOut saga', () => {
  it('should clear cart on sign out', () => {
    const gen = clearCartOnSignOutSaga();
    const eff = gen.next().value;
    const action = clearCartAction();
    expect(eff).toEqual(put(action));
  });
});
