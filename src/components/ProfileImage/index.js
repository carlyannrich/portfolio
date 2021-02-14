import React from 'react';
import PropTypes from 'prop-types';

import StyledProfileImage from './ProfileImage.style';
import imagesrc from '../assets/carly.PNG';
/**
 * Primary UI component for user interaction
 */
const ProfileImage = ({ size = 'medium', alt = 'Carly Richardson' }) => (
  <StyledProfileImage>
    <div>
      <img
        src={imagesrc}
        size={size}
        alt={alt}
      />
    </div>
  </StyledProfileImage>
);

ProfileImage.propTypes = {
  /**
     * How large should the img be?
     */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProfileImage;
