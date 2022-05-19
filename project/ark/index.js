import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * MAP     : 테이블 안에 체크박스 넣어서 클릭 시 색 고정되도록 할 것 -> 점령 칸 수에 표시
 * Group   : input(text)박스에 이름 입력 시 옆에 데이터 출력 / 기본 6개조 /
 */
