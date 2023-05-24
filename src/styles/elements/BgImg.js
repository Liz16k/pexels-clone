import styled from "styled-components";

const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  margin: 0;
  filter: brightness(0.5);
`;

export default BgImg;
