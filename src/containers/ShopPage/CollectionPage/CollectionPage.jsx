import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './CollectionPage.styles';
import CollectionItem from '../../../components/CollectionItem/CollectionItem';
import {
  selectIsCollectionsLoaded,
  selectShopCollection,
} from '../../../store/selectors/shop.selectors';
import Spinner from '../../../components/Spinner/Spinner';

const CollectionPage = ({ match }) => {
  const loading = useSelector(selectIsCollectionsLoaded);
  const collection = useSelector(
    selectShopCollection(match.params.collectionId)
  );

  return loading ? (
    <Spinner />
  ) : (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

CollectionPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      collectionId: PropTypes.string,
    }),
  }).isRequired,
};

export default CollectionPage;
