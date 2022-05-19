import styled from "styled-components";

const Block = styled.div`
  .form-box {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    background-color: #fff;
    text-align: center;
  }

  input,
  select {
    appearance: none;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin: auto;
    line-height: 1;

    &::placeholder {
      font-size: 15px;
      color: #8e8e8e;
    }
  }
`;

export default Block;
