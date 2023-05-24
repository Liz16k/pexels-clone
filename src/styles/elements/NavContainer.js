import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  & .logotype {
    @media (max-width: 900px) {
      display: none;
      visibility: hidden;
    }
  }
`