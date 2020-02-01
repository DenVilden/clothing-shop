import React from 'react';
import PropTypes from 'prop-types';
import { MenuContainer } from './HomePage.styles';
import MenuItem from '../../components/MenuItem/MenuItem';

const HomePage = ({ sections }) => (
  <MenuContainer>
    {sections.map(section => (
      <MenuItem key={section.id} section={section} />
    ))}
  </MenuContainer>
);

HomePage.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.number,
      linkUrl: PropTypes.string,
    })
  ).isRequired,
};

export default HomePage;
