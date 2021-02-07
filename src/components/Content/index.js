import React from "react";
import PropTypes from "prop-types";

import "./content.css";

export const Content = ({ content = "test content", ...props }) => (
  <section className="content-section">
    <div className="content">
      <h2>{content}</h2>
    </div>
  </section>
);

Content.propTypes = {
  content1: PropTypes.string.isRequired,
};
