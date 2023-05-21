import styled from "styled-components";

const CardButton = styled.button`
  background-image: ${(props) => props.iconSrc};
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  height: 2rem;
  width: 2rem;
  background-color: white;
  border-radius: 10px;
  &:hover {
    filter: brightness(0.8);
  }
`;

export default CardButton;
