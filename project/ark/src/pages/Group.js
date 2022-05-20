import React, { Fragment } from "react";
import styled from "styled-components";

import GroupSet from "../components/GroupSet";

const GroupCountainer = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  flex-wrap: wrap;

  .group-set {
    padding: 10px;

    table {
      td {
        padding: 3px;
      }
    }

    input {
      width: 70px;
    }

    .btn {
      display: block;
      height: 100%;
      width: 100%;
      margin: auto;
      /* background-color: transparent; */
      font-size: 12px;
      /* appearance: none; */
      border: 1px solid #ccc;
      cursor: pointer;
    }
  }
`;

const Group = () => {
  return (
    <GroupCountainer>
      <div>
        <h2>1조</h2>
        <GroupSet />
      </div>
      <div>
        <h2>2조</h2>
        <GroupSet />
      </div>
      <div>
        <h2>3조</h2>
        <GroupSet />
      </div>
      <div>
        <h2>4조</h2>
        <GroupSet />
      </div>
      <div>
        <h2>5조</h2>
        <GroupSet />
      </div>
      <div>
        <h2>6조</h2>
        <GroupSet />
      </div>
    </GroupCountainer>
  );
};

export default Group;
