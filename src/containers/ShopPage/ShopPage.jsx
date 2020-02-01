import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { fetchCollectionsStartAction } from '../../store/actions/shop.actions';

const CollectionsPage = lazy(() => import('./CollectionsPage/CollectionsPage'));
const CollectionPage = lazy(() => import('./CollectionPage/CollectionPage'));

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAction());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Route component={CollectionsPage} exact path={match.path} />
      <Route component={CollectionPage} path={`${match.path}/:collectionId`} />
    </Suspense>
  );
};

ShopPage.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string }).isRequired,
};

export default ShopPage;
