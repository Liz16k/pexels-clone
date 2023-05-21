import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
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
