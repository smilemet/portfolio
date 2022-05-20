import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  .inner {
    margin: 0 auto;
    padding: 40px 20px;
    width: 1200px;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 20px;
  }

  table {
    th {
        font-weight: bold;
      }
  }

`;

export default GlobalStyle;
