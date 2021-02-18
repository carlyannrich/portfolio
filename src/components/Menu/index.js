import React from 'react';
import { Link } from 'react-router-dom';

import StyledMenu from './Menu.style';

const Menu = () => (
  <StyledMenu>
    <Link to="/">
      <span aria-label="home">home</span>
    </Link>
    <Link to="/about">
      <span aria-label="about">about</span>
    </Link>
    <Link to="/contact">
      <span aria-label="contact">contact</span>
    </Link>
  </StyledMenu>
);
export default Menu;
