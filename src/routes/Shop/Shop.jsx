import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const CollectionsOverview = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverview.container')
);
const CollectionPage = lazy(() =>
  import('../../pages/CollectionPage/CollectionPage.container')
);

const Shop = ({ match, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <Suspense fallback={<Spinner />}>
      <Route component={CollectionsOverview} exact path={match.path} />
      <Route component={CollectionPage} path={`${match.path}/:collectionId`} />
    </Suspense>
  );
};

Shop.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCollectionStart: PropTypes.func.isRequired
};

export default Shop;
