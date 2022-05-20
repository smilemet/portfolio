import React, { Fragment, useCallback, useEffect, useState } from "react";
import useAxios from "axios-hooks";

const URL = "http://localhost:3001/character";
const GroupItem = (func) => {
  /** 변수
   * 이름 추적 / 캐릭터 정보 저장
   */
  const [name, setName] = useState("");
  const [dataset, setDataset] = useState([]);
  const [character, setCharacter] = useState([]);

  /** 이름 입력 시 데이터 로드 axios */
  const [{ data, loading, error }, loadData] = useAxios(
    { url: URL },
    {
      useCache: false,
      manual: true,
    }
  );

  /** 이름 입력 시 데이터 출력 */
  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(`clear1: ${e.target.value}`);
  };

  const onPutName = () => {
    (async () => {
      try {
        const res = await loadData(
          { url: `${URL}?name=${name}` },
          { useCache: false }
        );
        setDataset(res.data);
      } catch (e) {
        alert("캐릭터 데이터 로드 오류");
      }
    })();
  };

  useEffect(() => {
    setCharacter(data);
  }, [dataset]);

  console.log(character[0].name);

  return character ? (
    <>
      <tr>
        <td>
          <input type="text" onChange={onChangeName} onBlur={onPutName} />
        </td>
        <td>{character.maxHp}</td>
        <td>{character.currentHp}</td>
        <td>{character.atk}</td>
        <td>{character.def}</td>
        <td>{character.dex}</td>
        <td>{character.skill_1}</td>
        <td>{character.skill_2}</td>
      </tr>
    </>
  ) : (
    <>
      <tr>
        <td>
          <input type="text" onChange={onChangeName} onBlur={onPutName} />
        </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </>
  );
};

export default GroupItem;

// const {maxHp, currentHp, atk, def, dex, skill_1, skill_2} = character
