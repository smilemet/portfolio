import React, { Fragment } from "react";
import styled from "styled-components";

import Id from "./Id";
import Name from "./Name";
import Phone from "./Phone";
import Button from "./Button";

import img from "../img/m_icon_pw_step.png";

const ContentContainer = styled.div`
  max-width: 460px;
  padding: 0;

  h2 {
    font-weight: bold;
    font-size: 14px;
    margin: 20px 0 10px;
  }

  .form-group {
    margin-bottom: 40px;
  }

  .form-box {
    position: relative;
  }

  .obj-r {
    font-size: 15px;
    color: #8e8e8e;
    position: absolute;
    top: 16px;
    right: 15px;

    &.pw {
      width: 24px;
      height: 24px;
      background-image: url(${img});
      top: 12px;
    }
  }
`;

const Content = () => {
  return (
    <ContentContainer>
      <Id />
      <Name />
      <Phone />
      <Button>
        <button className="btn">가입하기</button>
      </Button>
    </ContentContainer>
  );
};

export default Content;
