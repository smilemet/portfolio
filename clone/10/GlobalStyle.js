import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f5f6f7;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .blind-text {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
  }

  .flex-row {
    display: flex;
  }
`;

export default GlobalStyle;
