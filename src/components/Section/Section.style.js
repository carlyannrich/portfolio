import styled from 'styled-components';

export const StyledSection = styled.div`
margin-top: 4%;

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
}

h2 {
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
}

.button {
  grid-area: button;
  display: flex;
  justify-content: center;
  color: #fff;
}

`;

export const Wrapper = styled.div``;
