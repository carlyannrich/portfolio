import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { StyledFooter } from './Footer.style';

const Footer = ({ primary }) => (
  <StyledFooter primary={primary}>
    <div className="footer-wrapper">
      <p className="twitter-icon">
        <FontAwesomeIcon icon={faTwitter} aria-label="Click to view Twitter" />
      </p>
    </div>
  </StyledFooter>
);

Footer.propTypes = {
  primary: PropTypes.bool.isRequired,
};

export default Footer;
