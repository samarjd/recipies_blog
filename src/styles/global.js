import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: ${(props) => props.theme.pink};
        }

        ::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme.green};
            border-radius: 999px;
        }
    }

    #root {
        width: 100%;
    }
    
    body {
        background-color: ${(props) => props.theme.white};
        background-image: url(https://t4.ftcdn.net/jpg/04/49/61/11/360_F_449611191_AdkL2EEaHZOGI28guVbI072gQABj1yjz.jpg);
        color: ${(props) => props.theme.black};
        background-size: cover;
        background-position: center;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    div > p, div > h1{
        backdrop-filter: blur(4px);
    }
`;

export const BasePageContainer = styled.main`
  width: 100%;
  max-width: 84%;
  margin: 0 auto;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 1000px) {
    max-width: 800px;
  }
`;
