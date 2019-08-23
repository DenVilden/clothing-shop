import {
  selectShopCollectionsForPreview,
  selectShopCollection,
} from './shop.selectors';

describe('selectShopCollectionsForPreview selector', () => {
  it('should return collections as an array', () => {
    const mockData = [{ id: 1, title: 'hats' }, { id: 2, title: 'jackets' }];

    const mockState = {
      shop: { collections: { hats: mockData[0], jackets: mockData[1] } },
    };

    const selector = selectShopCollectionsForPreview(mockState);
    expect(selector).toEqual([...mockData]);
  });

  it('should return empty array if there is no data', () => {
    const mockState = { shop: { collections: {} } };

    const selector = selectShopCollectionsForPreview(mockState);
    expect(selector).toEqual([]);
  });
});

describe('selectShopCollection selector', () => {
  const mockData = [{ id: 1, title: 'hats' }, { id: 2, title: 'jackets' }];

  const mockState = {
    shop: { collections: { hats: mockData[0], jackets: mockData[1] } },
  };

  it('should return requested collection', () => {
    const selector = selectShopCollection('jackets')(mockState);
    expect(selector).toEqual(mockData[1]);
  });

  it('should return undefined if there is no requested collection', () => {
    const selector = selectShopCollection('boots')(mockState);
    expect(selector).toBe(undefined);
  });
});
