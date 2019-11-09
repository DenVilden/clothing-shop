import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CollectionPreview from '../components/CollectionPreview';
import {
  selectIsCollectionFetching,
  selectShopCollectionsForPreview,
} from '../selectors/shop.selectors';
import WithSpinner from '../components/WithSpinner';

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

const mapStateToProps = createStructuredSelector({
  loading: selectIsCollectionFetching,
  collections: selectShopCollectionsForPreview,
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionsPage);

/* STYLES */
const CollectionsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
