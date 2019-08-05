import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';

const ShopPage = ({ match, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <>
      <Route component={CollectionsOverviewContainer} exact path={match.path} />
      <Route
        component={CollectionPageContainer}
        path={`${match.path}/:collectionId`}
      />
    </>
  );
};

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCollectionStart: PropTypes.func.isRequired
};

export default ShopPage;
