import React from "react";
import styled from "styled-components";

import logo2 from "../img/pc_sp_login_190522.png";

const FooterContainer = styled.footer`
  width: 460px;
  padding: 30px 0 15px;
  font-size: 12px;

  ul {
    margin-bottom: 9px;
    color: #7e7e7e;

    li {
      padding: 0 10px;
      border-right: 1px solid #ccc;

      &:last-of-type {
        border-right: none;
      }

      /* &::after {
        content: "|";
      } */
    }
  }

  address {
    color: #333333;

    .logo2 {
      display: inline-block;
      width: 63px;
      height: 12px;
      background-image: url(${logo2});
      background-position: -242px 0;
    }

    font-size: 10px;
  }

  .highlight {
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="inner">
        <ul className="flex-row">
          <li>이용약관</li>
          <li className="highlight">개인정보처리방침</li>
          <li>책임의 한계와 법적고지</li>
          <li>회원정보 고객센터</li>
        </ul>
        <address>
          <a href="https://www.navercorp.com/" className="logo2">
            <span className="blind-text">네이버</span>
          </a>
          　Copyright　
          <a href="https://www.navercorp.com/" className="highlight">
            Naver Corp.　
          </a>
          All Rights Reserved.
        </address>
      </div>
    </FooterContainer>
  );
};

export default Footer;
