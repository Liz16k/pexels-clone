import styled from "styled-components";

const Nav = styled.nav`
  z-index: 4;
  position: ${(props) => (props.transparent ? "absolute" : "fixed")};
  background-color: ${(props) => (props.transparent ? "" : "#232a34")};
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  width: 100%;
  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: white;
    & svg {
      border-radius: 0.5rem;
      &:hover {
        filter: brightness(0.8);
        cursor: pointer;
      }
    }
  }

  & input,
  button {
    background-color: #f7f7f7;
  }
`;

export default Nav;
