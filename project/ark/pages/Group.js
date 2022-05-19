import React, { useState } from "react";
import styled from "styled-components";
import useAxios from "axios-hooks";
import Spinner from "../components/Spinner";

// import useMountedRef from "../hooks/useMountedRef";
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

const URL = "http://localhost:3001/character";
const Group = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    { url: URL },
    { manual: true }
  );

  // 이런걸 30개 만들어야할듯
  const [name, setName] = useState("");
  const [character, setCharacter] = useState([]);

  const onChangeName = (e) => {
    /** 이름 입력 시 데이터 출력 */
    setName(e.target.value);
  };

  const onSubmitName = (e) => {
    (async () => {
      try {
        const res = await refetch({ url: `${URL}?name=${name}` });
        setCharacter(res.data);
      } catch (e) {
        alert("캐릭터 데이터 로드 오류");
      }
    })();
  };

  return (
    <GroupContainer>
      <Spinner visible={loading} />

      <Table>
        <thead>
          <tr>
            <th colSpan={2}>이름</th>
            <th colSpan={2}>체력</th>
            <th colSpan={3}>스텟</th>
            <th colSpan={2}>스킬셋</th>
          </tr>
          <tr>
            <th>이름</th>
            <th>확인</th>
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
          <GroupItem
            character={character}
            func1={onChangeName}
            func2={onSubmitName}
          />
          <GroupItem
            character={character}
            func1={onChangeName}
            func2={onSubmitName}
          />
          <GroupItem
            character={character}
            func1={onChangeName}
            func2={onSubmitName}
          />
          <GroupItem
            character={character}
            func1={onChangeName}
            func2={onSubmitName}
          />
        </tbody>
      </Table>
    </GroupContainer>
  );
};

export default Group;
