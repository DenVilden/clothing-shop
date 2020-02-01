import React from 'react';
import PropTypes from 'prop-types';
import { DirectoryMenuContainer } from './Directory.styles';
import MenuItem from './MenuItem/MenuItem';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(section => (
      <MenuItem key={section.id} section={section} />
    ))}
  </DirectoryMenuContainer>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.number,
      linkUrl: PropTypes.string,
    })
  ).isRequired,
};

export default Directory;
