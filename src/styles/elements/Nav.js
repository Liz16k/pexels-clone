import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  z-index: 4;
  position: ${(props) => (props.transparent ? "absolute" : "fixed")};
  background-color: ${(props) => (props.transparent ? "" : "#232a34")};
  display: flex;
  gap: 20px;
  padding: 10px 30px;
  width: 100%;
  & div {
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    & svg {
      border-radius: 0.5rem;
      margin-top: 5px;
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
  @media (max-width: 900px) {
    padding: 10px 15px;
  }
`;

export default Nav;
