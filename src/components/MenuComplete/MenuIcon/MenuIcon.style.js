import styled from 'styled-components';

const StyledMenuIcon = styled.section`
    position: fixed;
    width: 20%;
    /* Full width */
    transition: top 0.3s;
    /* Transition effect when sliding down (and up) */
    z-index: 10;
    top: 85%;
    left: 92%;

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
