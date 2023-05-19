import styled from "styled-components";

const BgImg = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  height: 500px;
  margin: 0;
  filter: brightness(0.5);
`;

export default BgImg;
