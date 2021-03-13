import styled from 'styled-components';

import device from '../../assets/device';

const StyledContent = styled.div`
.content-section {
  margin: 0 auto;
  width: 70%;

}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: "content content content content" ". button button ." ". . . .";
}

.content {
  grid-area: content;
  display: flex;
  justify-content: center;
  margin: 1%;
}

h2 {
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #fff;

    @media ${device.tablet} {
      font-size: 18px;
    }

    @media ${device.laptop} {
      font-size: 20px;
    }
}
`;

export default StyledContent;
