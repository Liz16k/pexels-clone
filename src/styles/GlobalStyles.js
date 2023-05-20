import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: 600;
}

body, html {
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.4;
}

header {
  position: relative;
}

main {
  padding: 0 30px;
  max-width: 1300px;
  margin: 0 auto;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

input {
  background-color: white;
  border: none;
}

h1 {
  color: white;
}

`;

export default GlobalStyle;
