import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/** 로딩바 컴포넌트 */
// --> http://mhnpd.github.io/react-loader-spinner/
import { RotatingLines } from "react-loader-spinner";

// 로딩바 뒤에 표시될 반투명 막
const TransLayer = styled.div`
  position: fixed;
  left: 0%;
  top: 0;
  z-index: 9999;
  background-color: #0003;
  width: 100%;
  height: 100%;
`;

const Spinner = ({ visible, color, width, height, strokeWidth }) => {
  return (
    <>
      {visible && (
        <TransLayer>
          <RotatingLines
            strokeColor={color}
            height={width}
            width={height}
            strokeWidth={strokeWidth}
            wrapperStyle={{
              position: "absolute",
              zIndex: 10000,
              left: "50%",
              top: "50%",
              marginLeft: -width / 2 + "px",
              marginTop: -height / 2 + "px",
            }}
          />
        </TransLayer>
      )}
    </>
  );
};

// 기본값 정의
Spinner.defaultProps = {
  visible: false,
  color: "#06f",
  strokeWidth: 1,
  width: 100,
  height: 100,
};

// 데이터 타입 설정
Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default React.memo(Spinner);
