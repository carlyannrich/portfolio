import styled from 'styled-components';

const StyledMenu = styled.nav`
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  height: 100vh;
  width: 50%
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  // eslint-disable-next-line no-confusing-arrow
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  a {
    font-size: 50px;
    padding: 10% 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.1s linear;
    text-align: center;
    transition: transform .2s;

    &:hover {
      color: #655D90;
      transform: scale(1.1);
    }
  }
}
`;

export default StyledMenu;
