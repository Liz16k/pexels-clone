import styled from "styled-components";

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 0;
  padding: 15px 15px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & p button[role="like"] {
    align-self: flex-end;
  }
  @media (max-width: 900px) {
    opacity: 1;
    z-index: 3;
    button[role="download"] {
      background-color: transparent;
      & svg {
        fill: white;
        transform: scale(2);
      }
    }
    button[role="like"],
    .image__author {
      opacity: 0;
      z-index: 0;
    }
  }
`;
