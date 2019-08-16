import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const CollectionsPage = lazy(() =>
  import('../../pages/CollectionsPage/CollectionsPage.container')
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
      <Route component={CollectionsPage} exact path={match.path} />
      <Route component={CollectionPage} path={`${match.path}/:collectionId`} />
    </Suspense>
  );
};

Shop.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCollectionStart: PropTypes.func.isRequired
};

export default Shop;
