import { useRef, useState } from "react";
import axios from "../../api/axios";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
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

const TodoListItem = ({ item, setItems }) => {
  const [isModificationMode, setIsModificationMode] = useState(false);
  const [inputValue, handleChange, setInputValue] = useInput();
  const input = useRef();
  const handleModificationMode = () => {
    setIsModificationMode(true);
    setInputValue(item.todo);
    setTimeout(() => input.current.focus(), 0);
  };
  const handleCancelModification = () => setIsModificationMode(false);

  const filterItemsById = () => {
    setItems((ctxItems) =>
      ctxItems.filter((ctxItem) => ctxItem.id !== item.id)
    );
  };

  const handleModification = () => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const body = { todo: inputValue, isCompleted: item.isCompleted };
    axios
      .put(`/todos/${item.id}`, body, headers) //
      .then((res) => {
        setIsModificationMode(false);
        console.log(res.data);
        setItems((ctxItems) => {
          return ctxItems.map((ctxItem) => {
            if (ctxItem.id === res.data.id) return res.data;
            return ctxItem;
          });
        });
      });
  };

  const handleisCompleted = () => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const body = { todo: item.todo, isCompleted: !item.isCompleted };
    axios
      .put(`/todos/${item.id}`, body, headers) //
      .then((res) => {
        setIsModificationMode(false);
        console.log(res.data);
        setItems((ctxItems) => {
          return ctxItems.map((ctxItem) => {
            if (ctxItem.id === res.data.id) return res.data;
            return ctxItem;
          });
        });
      });
  };
  const handleDelete = () => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .delete(`/todos/${item.id}`, headers) //
      .then(() => filterItemsById())
      .catch(console.log);
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
