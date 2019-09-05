import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CollectionItem from '../containers/CollectionItem';
import {
  selectIsCollectionsLoaded,
  selectShopCollection,
} from '../selectors/shop.selectors';
import WithSpinner from '../components/WithSpinner';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  </CollectionPageContainer>
);

CollectionPage.defaultProps = {
  collection: {
    items: [],
    title: '',
  },
};

CollectionPage.propTypes = {
  collection: PropTypes.shape({
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
  }),
};

const mapStateToProps = (state, props) => ({
  loading: selectIsCollectionsLoaded(state),
  collection: selectShopCollection(props.match.params.collectionId)(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

/* STYLES */
const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  text-transform: uppercase;
`;

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 800px) {
    align-self: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

  & > div {
    margin-bottom: 30px;
  }
`;
