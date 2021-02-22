import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

import StyledMenu from './Menu.style';

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <div className="menu">
      <Link to="/">
        <span aria-label="home">home</span>
      </Link>
      <Link to="/about">
        <span aria-label="about">about</span>
      </Link>
      <Link to="/contact">
        <span aria-label="contact">contact</span>
      </Link>
    </div>
  </StyledMenu>
);
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
