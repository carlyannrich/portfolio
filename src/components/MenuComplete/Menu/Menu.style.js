import styled from 'styled-components';

import device from '../../assets/device';

const StyledMenu = styled.nav`
.menu {
  display: flex;
  flex-direction: column;
  justify-content: right;
  background: black;
  height: 100%;
  width: 50%;
  text-align: left;
  padding-top: 12%;
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  // eslint-disable-next-line no-confusing-arrow
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

@media ${device.tablet} {
  height: 100%;
}

@media ${device.laptop} {
  height: 100%;
}

  a {
    font-size: 20px;
    font-family: 'Roboto';
    padding: 10px 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.1s linear;
    text-align: center;
    transition: transform .2s;

    &:hover {
      text-decoration: underline;
      color: #655D90;
      transform: scale(1.1);
    }
  @media ${device.tablet} {
    font-size: 30px;
  }

  @media ${device.laptop} {
    font-size: 40px;
  }
  }
}
`;

export default StyledMenu;
