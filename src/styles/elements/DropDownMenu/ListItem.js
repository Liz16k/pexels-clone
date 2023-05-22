import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid #dfdfe0;
  }
  &:hover {
    background-color: #dfdfe0;
    cursor: pointer;
  }
`;
