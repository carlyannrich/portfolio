import React from 'react';
import PropTypes from 'prop-types';

import StyledProfileImage from './ProfileImage.style';
import imagesrc from '../../assets/carly.PNG';

const ProfileImage = ({ size, alt = 'Carly Richardson' }) => (
  <StyledProfileImage size={size}>
    <div id="imageDiv">
      <img
        src={imagesrc}
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
