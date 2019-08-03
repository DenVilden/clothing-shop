import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';

class ShopPage extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchCollectionStartAsync: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <Route
          component={CollectionsOverviewContainer}
          exact
          path={match.path}
        />
        <Route
          component={CollectionPageContainer}
          path={`${match.path}/:collectionId`}
        />
      </>
    );
  }
}

export default ShopPage;
