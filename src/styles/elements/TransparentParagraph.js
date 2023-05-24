import styled from "styled-components";

export const TransparentParagraph = styled.p`
  color: white;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & span {
    opacity: 0.6;
  }
`;
