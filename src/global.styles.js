import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 40px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    @media screen and (max-width: 800px) {
      padding: 10px;
      
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
