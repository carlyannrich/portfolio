import styled from 'styled-components';

import device from '../../../assets/device';

const StyledMenuIcon = styled.section`
position: fixed;
width: 100%;
transition: top 0.3s;
z-index: 10;
top: 92%;
left: 85%;

@media ${device.tablet} {
    top: 90%;
    left: 88%;
    }

@media ${device.laptop} {
    top: 10%;
    left: 92%;
    }

.menu {
    width: 5%;
    cursor: pointer;
    transition: transform .2s;

    &:hover {
        transform: scale(1.1);
  }
}
`;

export default StyledMenuIcon;
