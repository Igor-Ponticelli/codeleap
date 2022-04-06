import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 12px;
    background: #e6e6e6;
  }
  ::-webkit-scrollbar-thumb {
    background: #c2c2c2;
    border-radius: 3px;
  }
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3 ,h4, h5 {
    font-weight: 400;
  }
`