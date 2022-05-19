import React from "react";

import Block from "./Block";

const Name = () => {
  return (
    <div className="form-group">
      <div className="form-item">
        <h2>이름</h2>
        <Block>
          <div className="form-box">
            <input type="text" />
          </div>
        </Block>
      </div>
      <div className="form-item">
        <h2>생년월일</h2>
        <Block>
          <div className="form-box">
            <input type="text" />
          </div>
        </Block>
      </div>
      <div className="form-item">
        <h2>성별</h2>
        <Block className="flex-row">
          <div className="form-box">
            <input type="text" placeholder="년(4자)" />
          </div>
          <div className="form-box"></div>
          <div className="form-box">
            <input type="text" placeholder="일" />
          </div>
        </Block>
      </div>
      <div className="form-item">
        <h2>
          본인 확인 이메일<span>(선택)</span>
        </h2>
        <Block>
          <div className="form-box">
            <input type="text" />
          </div>
        </Block>
      </div>
    </div>
  );
};

export default Name;
