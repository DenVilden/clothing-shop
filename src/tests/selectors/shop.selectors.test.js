import {
  selectShopCollectionsForPreview,
  selectShopCollection,
  selectIsCollectionsLoaded,
} from '../../selectors/shop.selectors';

describe('selectShopCollectionsForPreview selector', () => {
  it('should convert collections to an array', () => {
    const mockData = [{ id: 1 }, { id: 2 }];

    const mockState = {
      shop: { collections: { hats: mockData[0], jackets: mockData[1] } },
    };

    const selector = selectShopCollectionsForPreview(mockState);
    expect(selector).toEqual(mockData);
  });

  it('should return empty array if there is no data', () => {
    const mockState = { shop: { collections: {} } };

    const selector = selectShopCollectionsForPreview(mockState);
    expect(selector).toEqual([]);
  });
});

describe('selectShopCollection selector', () => {
  const mockData = [{ id: 1 }, { id: 2 }];

  const mockState = {
    shop: { collections: { hats: mockData[0], jackets: mockData[1] } },
  };

  it('should return requested collection', () => {
    const selector = selectShopCollection('jackets')(mockState);
    expect(selector).toEqual(mockData[1]);
  });

  it('should return undefined if requested collection not found', () => {
    const selector = selectShopCollection('boots')(mockState);
    expect(selector).toBe(undefined);
  });
});

describe('selectIsCollectionsLoaded selector', () => {
  it('should return true if data is loading', () => {
    const mockState = { shop: { collections: {} } };

    const selector = selectIsCollectionsLoaded(mockState);
    expect(selector).toBe(true);
  });

  it('should return false if data was loaded', () => {
    const mockState = {
      shop: { collections: { hats: { id: 1 }, jackets: { id: 2 } } },
    };

    const selector = selectIsCollectionsLoaded(mockState);
    expect(selector).toBe(false);
  });
});
