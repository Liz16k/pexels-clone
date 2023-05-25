import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #dfdfe0;
  border-radius: 0.5rem;
  background: white;
  text-align: center;
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

  @media (max-width: 540px) {
    width: ${(props)=>props.isOpen ? "10rem": ""};
    & p {
      display: none;
      opacity: 0;
      z-index: 0;
    }
    & > div img {
      margin: 0;
    }
  }
`;
