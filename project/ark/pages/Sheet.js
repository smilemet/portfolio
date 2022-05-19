import React, { useState } from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";

import MapItem from "../components/MapItem";

const SheetContainer = styled.div`
  display: inline-block;
  width: 100%;
`;

const Map = styled.section`
  width: 50%;
  .map-table {
    text-align: center;

    thead {
      th {
        width: 70px;
        padding-bottom: 10px;
        font-size: 18px;
        border-left: none;
        border-right: none;

        &:first-of-type {
          width: 30px;
        }
      }
    }

    tbody {
      th,
      td {
        height: 70px;
        line-height: 70px;
      }

      td {
        border: 1px solid #ccc;
        vertical-align: middle;
      }
    }
  }
`;

const Console = styled.section`
  width: 45%;

  h2 {
    margin-bottom: 49px;
  }

  p {
    padding: 10px 0;
  }

  span {
    font-weight: bold;
  }

  .desc {
    margin-top: 25px;
    padding: 10px;
    width: 100%;
    height: 200px;
    background-color: #eee;
    &::placeholder {
      text-align: center;
    }

    h3 {
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }

  .console-box {
    margin-top: 30px;
  }

  .console {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

const URL = "http://localhost:3001/research";
const Sheet = () => {
  const [{ data, loading, error }, loadText] = useAxios({
    manual: true,
  });

  const [blockName, setBlockName] = useState("");
  const [checked, setChecked] = useState([]);
  const [text, setText] = useState("내용 출력");

  const onClickBlock = (e) => {
    /** 점령 칸 수 시각화 & 카운트 */
    const isChecked = e.target.checked;
    const block = e.target.value;
    setBlockName(block);

    if (isChecked) {
      let copy = [...checked];
      copy.push(block);
      setChecked(copy);
    } else {
      let copy = [...checked];
      let index = copy.indexOf(block);
      copy.splice(index, 1);
      setChecked(copy);
    }

    /** 점령지 지문 */
    (async () => {
      let json = null;
      try {
        const res = await loadText({
          url: `${URL}?block=${block}`,
        });
        setText(res.data[0].text);
      } catch (e) {
        setText("데이터 없음");
        console.log("점령지 데이터 로드 오류");
      }
    })();
  };

  return (
    <SheetContainer className="flex-row">
      <Map className="map">
        <h2>점령 지도</h2>
        <table className="map-table">
          <thead>
            <tr>
              <th></th>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
              <th>F</th>
              <th>G</th>
            </tr>
          </thead>
          <tbody>
            <MapItem row="1" propFunc={onClickBlock} />
            <MapItem row="2" propFunc={onClickBlock} />
            <MapItem row="3" propFunc={onClickBlock} />
            <MapItem row="4" propFunc={onClickBlock} />
            <MapItem row="5" propFunc={onClickBlock} />
            <MapItem row="6" propFunc={onClickBlock} />
            <MapItem row="7" propFunc={onClickBlock} />
          </tbody>
        </table>
      </Map>
      <Console className="console">
        <h2>콘솔 내용</h2>
        <div className="desc">
          <h3>현재 지역 : {blockName}</h3>
          <p className="desc-text">{text}</p>
        </div>
        <div className="console-box">
          <p>
            <span>점령한 칸 수 : {checked.length}</span>
          </p>
          <p>
            <span>남은 칸 수 : {49 - checked.length}</span>
          </p>
        </div>
      </Console>
    </SheetContainer>
  );
};

export default Sheet;
