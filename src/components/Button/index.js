import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.style';

const Button = ({
  primary = true,
  size = 'medium',
  label = 'Click me',
}) => (
  <StyledButton
    primary={primary}
    type="button"
    size={size}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  label: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default Button;
