import styled from "styled-components";

export const DropDownContainer = styled.div`
  padding: 0 1rem;
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
  & > div {
    display: flex;
    align-items: center;
    svg {
      width: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 540px) {
    & p {
      display: none;
      opacity: 0;
      z-index: 0;
    }
    & > div svg {
      margin: 0;
    }
  }
`;
