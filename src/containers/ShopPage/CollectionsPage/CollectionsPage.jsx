import React from 'react';
import { useSelector } from 'react-redux';
import { CollectionsPageContainer } from './CollectionsPage.styles';
import CollectionPreview from '../../../components/CollectionPreview/CollectionPreview';
import Spinner from '../../../components/Spinner/Spinner';
import {
  selectIsCollectionFetching,
  selectShopCollectionsForPreview,
} from '../../../store/selectors/shop.selectors';

const CollectionsPage = () => {
  const loading = useSelector(selectIsCollectionFetching);
  const collections = useSelector(selectShopCollectionsForPreview);

  return loading ? (
    <Spinner />
  ) : (
    <CollectionsPageContainer>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </CollectionsPageContainer>
  );
};

export default CollectionsPage;
