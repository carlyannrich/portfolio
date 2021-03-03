import styled from 'styled-components';

export const StyledSection = styled.div`

.section {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0 auto;
  padding-top: 20%;
  max-width: 80%;
  color: #fff;
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
  margin: 0.5%;
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
  margin: 0.5%;
  color: #fff;
}

`;

export const Wrapper = styled.div``;
