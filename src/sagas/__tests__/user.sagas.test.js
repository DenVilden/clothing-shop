import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
} from '../../constants/user.types';
import {
  signInSuccessAction,
  signInFailureAction,
  signOutSuccessAction,
  signOutFailureAction,
  signUpSuccessAction,
  signUpFailureAction,
} from '../../actions/user.actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../api/firebase';
import userSagas, {
  getSnapshotFromUserAuthSaga,
  signInWithGoogleSaga,
  signInWithEmailSaga,
  isUserAuthenticatedSaga,
  signOutSaga,
  signUpSaga,
} from '../user.sagas';

describe('userSagas', () => {
  it('should watch all sagas', () => {
    const gen = userSagas();
    const eff = gen.next().value;
    expect(eff).toEqual(
      all([
        takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogleSaga),
        takeLatest(EMAIL_SIGN_IN_START, signInWithEmailSaga),
        takeLatest(CHECK_USER_SESSION, isUserAuthenticatedSaga),
        takeLatest(SIGN_OUT_START, signOutSaga),
        takeLatest(SIGN_UP_START, signUpSaga),
      ])
    );
  });
});

describe('getSnapshotFromUserAuthSaga', () => {
  const mockUserAuth = {};
  const mockAdditionalData = {};
  const gen = getSnapshotFromUserAuthSaga(mockUserAuth, mockAdditionalData);

  it('should call createUserProfileDocument', () => {
    const eff = gen.next().value;
    expect(eff).toEqual(
      call(createUserProfileDocument, mockUserAuth, mockAdditionalData)
    );
  });

  it('should call signInSuccessAction', () => {
    const mockUserData = { displayName: 'ivan', email: '123@mail.com' };
    const eff = gen.next(mockUserData).value;
    const action = signInSuccessAction(mockUserData);
    expect(eff).toEqual(put(action));
  });

  it('should not call signInSuccessAction if no userData', () => {
    const newGen = getSnapshotFromUserAuthSaga(
      mockUserAuth,
      mockAdditionalData
    );
    newGen.next();
    const eff = newGen.next().value;
    expect(eff).toBeUndefined();
  });

  it('should call signInFailureAction if error happens', () => {
    const newGen = getSnapshotFromUserAuthSaga(
      mockUserAuth,
      mockAdditionalData
    );
    newGen.next();
    const eff = newGen.throw({ message: 'error' }).value;
    const action = signInFailureAction('error');
    expect(eff).toEqual(put(action));
  });
});

describe('signInWithGoogleSaga', () => {
  const gen = signInWithGoogleSaga();

  it('should call auth signInWithPopup', () => {
    const signInWithPopup = jest.spyOn(auth, 'signInWithPopup');
    gen.next(googleProvider);
    expect(signInWithPopup).toHaveBeenCalledWith(googleProvider);
  });

  it('should call getSnapshotFromUserAuthSaga', () => {
    const mockUserAuth = { uid: '123da' };
    const eff = gen.next(mockUserAuth).value;
    expect({ ...eff }).toMatchObject(getSnapshotFromUserAuthSaga(mockUserAuth));
  });

  it('should call signInFailureAction if error happens', () => {
    const newGenerator = signInWithGoogleSaga();
    newGenerator.next();
    const eff = newGenerator.throw({ message: 'error' }).value;
    const action = signInFailureAction('error');
    expect(eff).toEqual(put(action));
  });
});

describe('signInWithEmailSaga', () => {
  const mockEmail = '123@mail.com';
  const mockPassword = '123';
  const mockAction = {
    payload: { email: mockEmail, password: mockPassword, displayName: 'ivan' },
  };
  const gen = signInWithEmailSaga(mockAction);

  it('should call auth signInWithEmailSaga', () => {
    const signInWithEmail = jest.spyOn(auth, 'signInWithEmailAndPassword');
    gen.next();
    expect(signInWithEmail).toHaveBeenCalledWith(mockEmail, mockPassword);
  });

  it('should call getSnapshotFromUserAuthSaga', () => {
    const mockUserAuth = { uid: '123da' };
    const eff = gen.next(mockUserAuth).value;
    expect({ ...eff }).toMatchObject(getSnapshotFromUserAuthSaga(mockUserAuth));
  });

  it('should call signInFailureAction if error happens', () => {
    const newGenerator = signInWithEmailSaga(mockAction);
    newGenerator.next();
    const eff = newGenerator.throw({ message: 'error' }).value;
    const action = signInFailureAction('error');
    expect(eff).toEqual(put(action));
  });
});

describe('isUserAuthenticatedSaga', () => {
  const gen = isUserAuthenticatedSaga();

  it('should call getCurrentUser', () => {
    const eff = gen.next().value;
    expect(eff).toEqual(getCurrentUser());
  });

  it('should call getSnapshotFromUserAuthSaga', () => {
    const mockUserAuth = { uid: '123da' };
    const eff = gen.next(mockUserAuth).value;
    expect({ ...eff }).toMatchObject(getSnapshotFromUserAuthSaga(mockUserAuth));
  });

  it('should call signInFailureAction if error happens', () => {
    const newGenerator = isUserAuthenticatedSaga();
    newGenerator.next();
    const eff = newGenerator.throw({ message: 'error' }).value;
    const action = signInFailureAction('error');
    expect(eff).toEqual(put(action));
  });
});

describe('signOutSaga', () => {
  const gen = signOutSaga();

  it('should call auth signOut', () => {
    const signOut = jest.spyOn(auth, 'signOut');
    gen.next();
    expect(signOut).toHaveBeenCalled();
  });

  it('should call signOutSuccessAction', () => {
    const eff = gen.next().value;
    const action = signOutSuccessAction();
    expect(eff).toEqual(put(action));
  });

  it('should call signOutFailureAction if error happens', () => {
    const newGenerator = signOutSaga();
    newGenerator.next();
    const eff = newGenerator.throw({ message: 'error' }).value;
    const action = signOutFailureAction('error');
    expect(eff).toEqual(put(action));
  });
});

describe('signUpSaga', () => {
  const mockEmail = '123@mail.com';
  const mockPassword = '123';
  const mockAction = {
    payload: { email: mockEmail, password: mockPassword, displayName: 'ivan' },
  };
  const gen = signUpSaga(mockAction);

  it('should call auth createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(
      auth,
      'createUserWithEmailAndPassword'
    );
    gen.next();
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      mockEmail,
      mockPassword
    );
  });

  it('should call signUpSuccessAction', () => {
    const eff = gen.next(mockAction).value;
    const action = signUpSuccessAction();
    expect(eff).toEqual(put(action));
  });

  it('should call getSnapshotFromUserAuthSaga', () => {
    const mockUserAuth = { uid: '123da' };
    const eff = gen.next(mockUserAuth).value;
    expect({ ...eff }).toMatchObject(getSnapshotFromUserAuthSaga(mockUserAuth));
  });

  it('should call signOutFailure if error happens', () => {
    const newGenerator = signUpSaga(mockAction);
    newGenerator.next();
    const eff = newGenerator.throw({ message: 'error' }).value;
    const action = signUpFailureAction('error');
    expect(eff).toEqual(put(action));
  });
});
