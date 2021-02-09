import React from 'react';
import PropTypes from 'prop-types';

import image from '../assets/carly.PNG';
import ProfileImage from '../ProfileImage/index';
import './header.css';

const Header = ({ primary, ...props }) => {
  const mode = primary ? 'header--primary' : 'header--secondary';
  return (
    <header className={mode} {...props}>
      <div className="wrapper">
        <div>
          <ProfileImage src={image} className="profile-image" />
          <h1>Carly Richardson</h1>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  primary: PropTypes.bool,
};

export default Header;
