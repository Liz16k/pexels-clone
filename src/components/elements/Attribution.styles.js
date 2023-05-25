import styled from "styled-components";
import { TransparentParagraph } from "./TransparentParagraph.styles";

export const Attribution = styled(TransparentParagraph)`
  font-size: 14px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: 0.6;
  &:hover {
    opacity: 0.9;
  }
`;
