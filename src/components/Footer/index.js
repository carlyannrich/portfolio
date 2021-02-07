import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export const Footer = ({ primary, ...props }) => {
  const mode = primary ? "footer-align--primary" : "footer-align--secondary";
  return (
    <footer className={mode} {...props}>
      <div className="footer-wrapper">
        <div>
          <p className="twitter-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  primary: PropTypes.bool,
};
