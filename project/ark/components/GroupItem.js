import React, { useCallback, useEffect, useState } from "react";

const GroupItem = ({ character, func1, func2 }) => {
  if (character != false) {
    const [{ maxHp, currentHp, atk, def, dex, skill_1, skill_2 }] = character;

    console.log(character);
    return (
      <tr>
        <td>
          <input type="text" onChange={func1} />
        </td>
        <td>
          <button type="button" onClick={func2}>
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
    <>
      <tr>
        <td>
          <input type="text" onChange={func1} />
        </td>
        <td>
          <button type="button" onClick={func2}>
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
    </>
  );
};

export default GroupItem;
