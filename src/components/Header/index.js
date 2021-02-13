import React from 'react';
import PropTypes from 'prop-types';

import image from '../assets/carly.PNG';
import ProfileImage from '../ProfileImage/index';

import { StyledHeader } from './Header.style';

const Header = ({ primary }) => (
  <StyledHeader primary={primary}>
    <ProfileImage src={image} className="profile-image" />
    <h1>Carly Richardson</h1>
  </StyledHeader>
);

Header.propTypes = {
  primary: PropTypes.bool.isRequired,
};

export default Header;
