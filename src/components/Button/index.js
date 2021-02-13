import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.style';

const Button = ({
  primary = true,
  backgroundColor = 'black',
  size = 'medium',
  label = 'Click me',
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    primary={primary}
    type="button"
    size={size}
    className={`storybook-button ${size}`}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  label: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default Button;
