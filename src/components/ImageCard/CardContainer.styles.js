import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  @media (min-width: 900px) {
    margin-bottom: 20px;
    &:hover {
      & img {
        transition: filter 0.25s ease-out;
        filter: brightness(0.8);
      }
      & > div {
        opacity: 1;
        z-index: 2;
      }
    }
  }
`;
