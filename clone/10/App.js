import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  * {
    margin: 0 auto;
  }

  .inner {
    max-width: 768px;
    text-align: center;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Content />
      <Footer />
    </AppContainer>
  );
};

export default App;
