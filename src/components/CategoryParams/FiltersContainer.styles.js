import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  & div {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 540px) {
    margin-top: 1rem;
  }
`;
