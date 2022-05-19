import React from "react";

import Block from "./Block";

const Phone = () => {
  return (
    <div className="form-group">
      <div className="form-item">
        <h2>휴대전화</h2>
        <Block>
          <div className="form-box">
            <input type="text" />
          </div>
        </Block>
        <Block>
          <div className="form-box">
            <input type="password" />
          </div>
        </Block>
        <Block>
          <div className="form-box">
            <input type="password" />
          </div>
        </Block>
      </div>
    </div>
  );
};

export default Phone;
