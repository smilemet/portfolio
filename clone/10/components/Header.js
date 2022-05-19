import React from "react";
import styled from "styled-components";

import logo from "../img/m_naver_logo_20191126.png";

const HeaderContainer = styled.header`
  padding: 60px 0 25px;

  .logo {
    display: block;
    width: 240px;
    height: 44px;
    background-image: url(${logo});
    background-size: cover;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner">
        <a href="http://www.naver.com/" className="logo">
          <h1 className="blind-text">Naver</h1>
        </a>
      </div>
    </HeaderContainer>
  );
};

export default Header;
