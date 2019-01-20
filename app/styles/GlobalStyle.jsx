import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 100vh;
    min-height: 100vh;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
