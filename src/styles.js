import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* latin */
  @font-face {
    font-family: 'Open Sans Condensed';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'),
      url('https://fonts.gstatic.com/s/opensanscondensed/v14/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMR7eS2Ao.woff2')
        format('woff2');
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    margin: 0;
    padding: 20px 40px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
