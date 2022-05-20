import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  appearance: none;
  &:hover {
    background-color: ${(props) => props.hover};
  }
  &:checked {
    background-color: ${(props) => props.clicked};
  }
  &.lastone {
    background-color: ${(props) => props.last};
  }
`;

const MapItem = ({ row, propFunc }) => {
  const column = ["A", "B", "C", "D", "E", "F", "G"];
  return (
    <tr>
      <th>{row}</th>
      {[...new Array(7)].map((v, i) => {
        return (
          <td key={i}>
            <Input
              type="checkbox"
              value={`${column[i]}${row}`}
              onClick={propFunc}
            ></Input>
          </td>
        );
      })}
    </tr>
  );
};

Input.defaultProps = {
  hover: "#900C3F",
  clicked: "#900C3F50",
  last: "#4277D3",
};

export default MapItem;
