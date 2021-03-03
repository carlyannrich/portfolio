import styled from 'styled-components';

const checkSizes = (size) => {
  const sizes = {
    small: {
      width: '50%',
      padding: '10px 25%',
    },
    medium: {
      width: '60%',
      padding: '15px 25%',
    },
    large: {
      width: '70%',
      padding: '20px 25%',
    },
  };
  if (size in sizes) return sizes[size];

  return sizes.small;
};

const StyledProfileImage = styled.image`
#imageDiv {
  width: 30%
}

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
