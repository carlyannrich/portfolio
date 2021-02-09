import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const Content = ({ content = 'test content' }) => (
  <section className="content-section">
    <div className="content">
      <h2>{content}</h2>
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
