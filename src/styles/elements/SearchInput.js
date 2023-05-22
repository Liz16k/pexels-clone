import styled from "styled-components";

const SearchInput = styled.input`
  color: #2c343e;
  height: 100%;
  width: 100%;
  padding: 1rem;
  font-size: 18px;
  flex-grow: 1;
  &:focus {
    outline: none;
    border-right: 2px solid #dfdfe0;
  }
`;

export default SearchInput;
