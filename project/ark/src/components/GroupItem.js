import React, { useState } from "react";
import useAxios from "axios-hooks";

/** url 주소 */
const URL = "http://localhost:3001/character";

const GroupItem = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    { url: URL },
    { manual: true }
  );

  const [name, setName] = useState("");
  const [character, setCharacter] = useState([]);

  /** 이름 입력 시 데이터 출력 */
  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
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

  if (character != false) {
    const [{ maxHp, currentHp, atk, def, dex, skill_1, skill_2 }] = character;

    console.log(character);
    return (
      <tr>
        <td>
          <input type="text" onChange={onChangeName} />
        </td>
        <td>
          <button type="button" onClick={onSubmitName} className="btn">
            입력
          </button>
        </td>
        <td>{maxHp}</td>
        <td>{currentHp}</td>
        <td>{atk}</td>
        <td>{def}</td>
        <td>{dex}</td>
        <td>{skill_1}</td>
        <td>{skill_2}</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <input type="text" onChange={onChangeName} />
      </td>
      <td>
        <button type="button" onClick={onSubmitName} className="btn">
          입력
        </button>
      </td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  );
};

export default GroupItem;
