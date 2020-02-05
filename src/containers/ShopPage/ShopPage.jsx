import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { fetchCollectionsStartAction } from '../../store/actions/shop.actions';

const CollectionsPage = lazy(() => import('./CollectionsPage/CollectionsPage'));
const CollectionPage = lazy(() => import('./CollectionPage/CollectionPage'));

const propTypes = {
  match: PropTypes.shape({ path: PropTypes.string }).isRequired,
};

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAction());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route component={CollectionsPage} exact path={match.path} />
        <Route
          component={CollectionPage}
          path={`${match.path}/:collectionId`}
        />
      </Switch>
    </Suspense>
  );
};

ShopPage.propTypes = propTypes;

export default ShopPage;
