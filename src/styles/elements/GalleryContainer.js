import styled from "styled-components";

export const GalleryContainer = styled.div`
  & .gallery {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  & .column {
    margin: 0 10px 10px 0;
  }
`;
