import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Directory from '../../components/Directory/Directory.container';

const HomePage = ({ fetchDirectoryStart }) => {
  useEffect(() => {
    fetchDirectoryStart();
  }, [fetchDirectoryStart]);

  return (
    <main>
      <Directory />
    </main>
  );
};

HomePage.propTypes = {
  fetchDirectoryStart: PropTypes.func.isRequired,
};

export default HomePage;
