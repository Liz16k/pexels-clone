import styled from "styled-components";

const CardButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(0.8);
  }
`;

export default CardButton;
