import styled from "styled-components";

export const RecipesListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 50px;
  row-gap: 30px;
  margin-top: 60px;
  margin-bottom: 80px;
`;
