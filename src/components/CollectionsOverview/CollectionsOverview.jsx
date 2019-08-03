import React from 'react';
import PropTypes from 'prop-types';
import { CollectionsOverviewContainer } from './CollectionsOverview.styles';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...collection }) => (
      <CollectionPreview key={id} {...collection} />
    ))}
  </CollectionsOverviewContainer>
);

CollectionsOverview.propTypes = {
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
          price: PropTypes.number
        })
      )
    })
  ).isRequired
};

export default CollectionsOverview;
