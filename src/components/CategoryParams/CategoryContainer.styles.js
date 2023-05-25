import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
