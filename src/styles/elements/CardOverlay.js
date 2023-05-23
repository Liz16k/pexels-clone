import styled from "styled-components";

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
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
  & button[role="like"] {
    align-self: flex-end;
  }
`;
