import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { fetchCollectionsStartAction } from '../../store/actions/shop.actions';

const CollectionsPage = lazy(() =>
  import('./CollectionsPage/CollectionsPage.container')
);
const CollectionPage = lazy(() =>
  import('./CollectionPage/CollectionPage.container')
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
  match: PropTypes.shape({ path: PropTypes.string }).isRequired,
  fetchCollectionStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchCollectionStart: () => fetchCollectionsStartAction(),
};

export default connect(null, mapDispatchToProps)(Shop);
