import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 20px 40px;

    @media (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
