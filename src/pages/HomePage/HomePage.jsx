import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Directory from '../../components/Directory/Directory.container';

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

export default HomePage;
