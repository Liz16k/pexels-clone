import styled from "styled-components";

export const GalleryContainer = styled.div`
  position: relative;
  & .gallery {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  & .column:not(:last-child) {
    margin-right: 20px;
  }
`;
