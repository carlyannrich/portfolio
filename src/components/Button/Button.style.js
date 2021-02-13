import styled from 'styled-components';

const checkSizes = (size) => {
  const sizes = {
    small: {
      text: '14px',
      width: '500px',
      padding: '10px 16px',
    },
    medium: {
      text: '18px',
      width: '500px',
      padding: '11px 20px',
    },
    large: {
      text: '24px',
      width: '500px',
      padding: '12px 24px',
    },

  };

  if (size in sizes) return sizes[size];

  return sizes.medium;
};

const StyledButton = styled.button`
  transition: transform .2s;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: ${({ primary }) => (primary ? '0' : '5px')};
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color:  ${({ primary }) => (primary ? 'white' : '#655D90')};
  background-color: ${({ primary }) => (primary ? '#655D90' : 'white')};
  padding: ${({ size }) => checkSizes(size).padding};
  max-width: ${({ size }) => checkSizes(size).width};
  font-size: ${({ size }) => checkSizes(size).text};

  &:hover {
    transform: scale(1.1);
  }
`;

export default StyledButton;
