import { Link } from "react-router-dom";
import styled from "styled-components";

const SuggestionLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
  &:hover{
    color: grey;
  }
`;

export default SuggestionLink;
