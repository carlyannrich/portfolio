import styled from 'styled-components';

const checkSizes = (size) => {
  const sizes = {
    small: {
      width: '10%',
      padding: '10px 16px',
    },
    medium: {
      width: '15%',
      padding: '11px 20px',
    },
    large: {
      width: '30%',
      padding: '12px 24px',
    },
  };
  if (size in sizes) return sizes[size];

  return sizes.medium;
};

const StyledProfileImage = styled.image`
img {
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  width: ${({ size }) => checkSizes(size).width};
  padding: ${({ size }) => checkSizes(size).padding};
  transition: transform .2s;

    &:hover {
    transform: scale(1.1);
  }
}
`;

export default StyledProfileImage;
