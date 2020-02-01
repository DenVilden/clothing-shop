import React from 'react';
import PropTypes from 'prop-types';
import { CollectionsPageContainer } from './CollectionsPage.styles';
import CollectionPreview from '../../../components/CollectionPreview/CollectionPreview';

const CollectionsPage = ({ collections }) => (
  <CollectionsPageContainer>
    {collections.map(collection => (
      <CollectionPreview key={collection.id} collection={collection} />
    ))}
  </CollectionsPageContainer>
);

CollectionsPage.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      routeName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          imageUrl: PropTypes.string,
          price: PropTypes.number,
        })
      ),
    })
  ).isRequired,
};

export default CollectionsPage;
