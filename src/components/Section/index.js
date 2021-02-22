import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/index';
import Content from '../Content/index';
import { StyledSection } from './Section.style';

const Section = ({ content = 'test content', label }) => (
  <StyledSection className="section">
    <div className="content">
      <h2>
        {content && <Content content={content} />}
      </h2>
    </div>
    <div className="button">
      {label && <Button label={label} />}
    </div>
  </StyledSection>
);

Section.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Section;
