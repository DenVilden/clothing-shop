import { selectCurrentUser } from '../../selectors/user.selectors';

describe('selectCurrentUser selector', () => {
  it('should return currentUser data', () => {
    const mockUser = {
      id: 'hfd234',
      email: '123@mail.com',
      displayName: 'ivan',
    };
    const mockState = { user: { currentUser: mockUser } };
    const selector = selectCurrentUser(mockState);
    expect(selector).toEqual(mockUser);
  });
});
