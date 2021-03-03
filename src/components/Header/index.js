import React from 'react';
import PropTypes from 'prop-types';

import ProfileImage from '../ProfileImage/index';

import { StyledHeader } from './Header.style';

const Header = ({ size }) => (
  <StyledHeader>
    <div id="container">
      <div id="containerImg">
        <ProfileImage size={size} alt="Carly Richardson" />
      </div>
      <h1>Carly Richardson</h1>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default Header;
