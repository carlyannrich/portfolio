import React from 'react';
import PropTypes, { bool, func } from 'prop-types';

import image from '../../assets/menu.svg';
import StyledMenuIcon from './MenuIcon.style';

const MenuIcon = ({ alt = 'Twitter Icon', open, setOpen }) => (
  <StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
    <div className="menu">
      <img src={image} alt={alt} />
    </div>
  </StyledMenuIcon>
);

MenuIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MenuIcon;
