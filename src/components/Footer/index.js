import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { StyledFooter } from './Footer.style';

const Footer = () => (
  <StyledFooter>
    <footer>
      <div className="footer-wrapper">
        <a href="https://www.twitter.com/library_carlyr" aria-label="Click for my Twitter" className="icon-wrapper">
          <FontAwesomeIcon icon={faTwitter} className="twitter-icon" role="presentation" />
        </a>
        <p id="footer-content">created with love 2021</p>
      </div>
    </footer>
  </StyledFooter>
);

export default Footer;
