import React from 'react';
import PropTypes from 'prop-types';

import image from '../assets/menu.svg';
import StyledMenuIcon from './MenuIcon.style';

const MenuIcon = ({ src = image, alt = '' }) => (
  <StyledMenuIcon>
    <div className="menu">
      <img src={src} alt={alt} />
    </div>
  </StyledMenuIcon>
);

MenuIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MenuIcon;
