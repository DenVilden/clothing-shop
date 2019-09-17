import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { fetchCollectionsStartAction } from '../actions/shop.actions';

const CollectionsPage = lazy(() => import('../pages/CollectionsPage'));
const CollectionPage = lazy(() => import('../pages/CollectionPage'));

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
  fetchCollectionStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchCollectionStart: () => fetchCollectionsStartAction(),
};

export default connect(
  null,
  mapDispatchToProps
)(Shop);