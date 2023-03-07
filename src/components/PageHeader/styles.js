import styled from "styled-components";

export const PageHeaderContainer = styled.section`
  background-color:#ffffff50;
  padding:5px;
  border-radius:5px;
  h1 {
    font-family: "Rakkas", serif;
    font-size: 48px;
    color: ${(props) => props.theme.primary};
    letter-spacing: 2px;
  }

  p {
    font-size: 20px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  svg {
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;
