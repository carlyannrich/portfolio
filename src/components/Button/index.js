import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.style';

// eslint-disable-next-line no-alert
const handleClick = () => { alert('I was clicked'); };

const Button = ({
  primary = true,
  size = 'medium',
  label = 'Click me',
}) => (
  <StyledButton
    onClick={handleClick}
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
};

export default Button;
