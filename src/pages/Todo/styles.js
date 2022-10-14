import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  font-size: 15px;
  height: 40px;
`;

export const TodoContents = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%;
  background-color: #f9d9a9;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background-color: #fdc269;
  }
  ${({ isCompleted }) =>
    isCompleted
      ? `
        color: #545454;
        background-color: #dad5ce;
        text-decoration: line-through;
        font-style: italic;
         `
      : null}
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoForm = styled.form`
  display: flex;
  margin-top: 15px;
`;

export const TodoFormInput = styled.input`
  height: 35px;
`;
