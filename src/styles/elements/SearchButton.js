import styled from "styled-components";

const SearchButton = styled.button`
  width: 3rem;
  opacity: 0.6;
  cursor: pointer;
  &:hover svg {
    fill: #05a081;
  }
  & svg {
    width: 35px;
    padding-right: .5rem;
  }
`;

export default SearchButton;
