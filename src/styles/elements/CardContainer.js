import styled from "styled-components";

export const CardContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  overflow: hidden;
  &:hover {
    & img {
      filter: brightness(0.8);
    }
    & > div {
      opacity: 1;
      z-index: 2;
    }
  }
`;
