import React, { useState } from "react";
import styled from "styled-components";
import useAxios from "axios-hooks";

// import useMountedRef from "../hooks/useMountedRef";
// import Spinner from "../components/Spinner";
import Table from "../components/Table";
import GroupItem from "../components/GroupItem";

const GroupContainer = styled.div`
  padding: 10px;

  table {
    td {
      padding: 3px;
    }
  }

  input {
    width: 70px;
  }
`;

const Group = () => {
  const [name, setName] = useState("");
  const [dataset, setDataset] = useState([]);
  const [character, setCharacter] = useState([]);
  const [{ data, loading, error }, loadData] = useAxios(
    { url: URL },
    {
      useCache: false,
      manual: true,
    }
  );
  let isLoaded = false;
  const onPutName = () => {
    (async () => {
      try {
        const res = await loadData({
          url: `${URL}?name=${name}`,
        });
        setDataset(res.data);
        isLoaded = true;
        console.log(`clear2: ${res}`);
      } catch (e) {
        alert("캐릭터 데이터 로드 오류");
      }
    })();
  };

  return (
    <GroupContainer>
      {/* <Spinner visible={loading} /> */}
      <Table>
        <thead>
          <tr>
            <th rowSpan={2}>이름</th>
            <th colSpan={2}>체력</th>
            <th colSpan={3}>스텟</th>
            <th colSpan={2}>스킬셋</th>
          </tr>
          <tr>
            <th>최대</th>
            <th>현재</th>
            <th>공격</th>
            <th>방어</th>
            <th>민첩</th>
            <th>스킬1</th>
            <th>스킬2</th>
          </tr>
        </thead>
        <tbody>
          <GroupItem />
          <GroupItem />
        </tbody>
      </Table>
    </GroupContainer>
  );
};

export default Group;
