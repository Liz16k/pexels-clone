import styled from "styled-components";

const CardButton = styled.button`
  background-image: ${(props) =>
    props.type === "download"
      ? "url('/src/assets/download.png')"
      : props.type === "like"
      ? props.isLiked
        ? "url('/src/assets/favorite_fill.png')"
        : "url('/src/assets/favorite_outline.png')"
      : ""};
  background-position: center;
  background-size: contain;
  height: 1.5rem;
  width: 1.5rem;
`;

export default CardButton;
