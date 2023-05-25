import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #dfdfe0;
  border-radius: 0.5rem;
  background: white;
  text-align: center;
  line-height: 1;
  cursor: pointer;
  & p,
  li,
  img {
    opacity: 0.7;
  }
  &:hover {
    cursor: pointer;
  }
  & > div {
    display: flex;
    align-items: center;
    img {
      width: 1.5rem;
      height: fit-content;
      margin-right: 0.5rem;
    }
  }
`;
