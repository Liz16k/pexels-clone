import styled from "styled-components";

const Nav = styled.nav`
  z-index: 4;
  position: ${(props) => (props.transparent ? "absolute" : "fixed")};
  background-color: ${(props) => (props.transparent ? "" : "white")};
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  width: 100%;
  & img:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
  & input,
  button {
    background-color: #f7f7f7;
  }
`;

export default Nav;
