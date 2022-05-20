import React from "react";

import Table from "./Table";
import GroupItem from "./GroupItem";

const GroupSet = () => {
  return (
    <div className="group-set">
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
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
        </tbody>
      </Table>
    </div>
  );
};

export default GroupSet;
