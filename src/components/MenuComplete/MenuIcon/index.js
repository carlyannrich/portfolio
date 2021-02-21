import React from 'react';
import PropTypes, { bool, func } from 'prop-types';

import image from '../../assets/menu.svg';
import StyledMenuIcon from './MenuIcon.style';

const MenuIcon = ({
  src = image, alt = '', open, setOpen,
}) => (
  <StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
    <div className="menu">
      <img src={src} alt={alt} />
    </div>
  </StyledMenuIcon>
);

MenuIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MenuIcon;
