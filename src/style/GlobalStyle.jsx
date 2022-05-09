import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: "Inter", sans-serif;
  min-height: 100vh;
}

  input,
  textarea,
  button,
  select,
  a{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  a {
    text-decoration: none ;
    color: inherit;
  }
`;

export default GlobalStyle;
