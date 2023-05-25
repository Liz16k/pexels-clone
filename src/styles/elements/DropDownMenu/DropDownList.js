import styled from "styled-components";

export const DropDownList = styled.ul`
  z-index: 5;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  background: white;
  border: 1px solid #dfdfe0;
  border-radius: 0.5rem;
  @media (max-width: 540px) {
    width: 10rem;
    padding: 0.5rem 1rem;
  }
`;
