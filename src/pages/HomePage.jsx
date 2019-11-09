import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Directory from '../containers/Directory';
import { fetchSectionsStartAction } from '../actions/directory.actions';

const HomePage = ({ fetchSectionsStart }) => {
  useEffect(() => {
    fetchSectionsStart();
  }, [fetchSectionsStart]);

  return (
    <>
      <Directory />
    </>
  );
};

HomePage.propTypes = {
  fetchSectionsStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchSectionsStart: () => fetchSectionsStartAction(),
};

export default connect(null, mapDispatchToProps)(HomePage);
