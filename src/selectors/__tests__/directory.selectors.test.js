import {
  selectIsDirectoryFetching,
  selectDirectorySections,
} from '../directory.selectors';

describe('selectDirectorySections selector', () => {
  it('should return is sections array', () => {
    const mockState = { directory: { sections: [] } };
    const selector = selectDirectorySections(mockState);
    expect(selector).toEqual([]);
  });
});

describe('selectIsDirectoryFetching selector', () => {
  it('should return isFetching boolean', () => {
    const mockState = { directory: { isFetching: false } };
    const selector = selectIsDirectoryFetching(mockState);
    expect(selector).toBe(false);
  });
});
