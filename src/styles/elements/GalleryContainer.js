import styled from "styled-components";

export const GalleryContainer = styled.div`
  position: relative;
  & .gallery {
    display: flex;
    width: 100%;
  & .column:not(:last-child) {
    margin-right: 1.5rem;
    @media (max-width: 900px) {
      margin-right: 0.8rem;
    }
  }
  & p {
    text-align: center;
  }
`;
