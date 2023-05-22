import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #dfdfe0;
  border-radius: 0.5rem;
  background: white;
  text-align: center;
  & p, li {
    opacity: 0.7;
  }
  &:hover {
    cursor: pointer;
  }
`;
