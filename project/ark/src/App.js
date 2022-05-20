import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";
import styled from "styled-components";

import Sheet from "./pages/Sheet";
import Group from "./pages/Group";
import G1 from "./pages/G1";
import G2 from "./pages/G2";
import G3 from "./pages/G3";
import G4 from "./pages/G4";
import G5 from "./pages/G5";
import G6 from "./pages/G6";

const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <div className="inner">
        <nav>
          <MenuLink to="/sheet">점령 시트</MenuLink>
          <MenuLink to="/group">조편성</MenuLink>
          <MenuLink to="/G1">전투 1조</MenuLink>
          <MenuLink to="/G2">전투 2조</MenuLink>
          <MenuLink to="/G3">전투 3조</MenuLink>
          <MenuLink to="/G4">전투 4조</MenuLink>
          <MenuLink to="/G5">전투 5조</MenuLink>
          <MenuLink to="/G6">전투 6조</MenuLink>
        </nav>
        <hr />

        <Routes>
          <Route path="/sheet" element={<Sheet />} />
          <Route path="/group" element={<Group />} />
          <Route path="/G1" element={<G1 />} />
          <Route path="/G2" element={<G2 />} />
          <Route path="/G3" element={<G3 />} />
          <Route path="/G4" element={<G4 />} />
          <Route path="/G5" element={<G5 />} />
          <Route path="/G6" element={<G6 />} />
        </Routes>
      </div>
    </AppContainer>
  );
};

export default App;
