import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  > label {
    font-size: 20px;
    &:not(:nth-child(1)) {
      margin-top: 15px;
    }
  }

  > input {
    margin-top: 5px;
  }

  > button {
    margin-top: 25px;
    width: 100%;
  }
`;

export const AuthButton = styled.button`
  font-size: 15px;
  height: 35px;
`;

export const AuthInput = styled.input`
  height: 35px;
  width: 100%;
`;
