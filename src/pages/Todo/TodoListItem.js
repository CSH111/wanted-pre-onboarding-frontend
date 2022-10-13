import { useRef, useState } from "react";
import styled from "styled-components";
import { useDelete, useInput, usePut } from "../../hooks";

const StyledDiv = styled.div`
  :hover {
    background-color: #4646463d;
  }
  ${({ isCompleted }) =>
    isCompleted
      ? `text-decoration: line-through;
         font-style: italic;`
      : null}
`;

const TodoListItem = ({ item }) => {
  const [isModificationMode, setIsModificationMode] = useState(false);
  const [inputValue, handleChange, setInputValue] = useInput();
  const { putTodo } = usePut();
  const { deleteTodo } = useDelete();

  const input = useRef();

  const handleModificationMode = () => {
    setIsModificationMode(true);
    setInputValue(item.todo);
    setTimeout(() => input.current.focus(), 0);
  };

  const handleCancelModification = () => setIsModificationMode(false);

  const handleModification = async () => {
    const body = { todo: inputValue, isCompleted: item.isCompleted };
    await putTodo(item.id, body);
    setIsModificationMode(false);
  };

  const handleisCompleted = () => {
    const body = { todo: item.todo, isCompleted: !item.isCompleted };
    putTodo(item.id, body);
  };

  const handleDelete = () => {
    deleteTodo(item.id);
  };

  return (
    <li>
      {isModificationMode && (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            ref={input}
          />
          <button onClick={handleModification}>제출</button>
          <button onClick={handleCancelModification}>취소</button>
        </>
      )}
      {!isModificationMode && (
        <>
          <StyledDiv isCompleted={item.isCompleted} onClick={handleisCompleted}>
            {item.todo}
          </StyledDiv>
          <button onClick={handleModificationMode}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoListItem;
