import React from "react";

import Block from "./Block";

const Id = () => {
  return (
    <div className="form-group">
      <div className="form-item">
        <h2>아이디</h2>
        <Block>
          <div className="form-box">
            <input type="text" />
            <span className="obj-r">@naver.com</span>
          </div>
        </Block>
      </div>
      <div className="form-item">
        <h2>비밀번호</h2>
        <Block>
          <div className="form-box">
            <input type="password" />
            <span className="obj-r pw"></span>
          </div>
        </Block>
      </div>
      <div className="form-item">
        <h2>비밀번호 재확인</h2>
        <Block>
          <div className="form-box">
            <input type="password" />
            <span className="obj-r pw"></span>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default Id;
