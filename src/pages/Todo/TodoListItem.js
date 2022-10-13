import { useRef, useState } from "react";
import axios from "../../api/axios";
import useInput from "../../hooks/useInput";

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
  const handleModification = () => {};
  const filterItemsById = (id) => {
    setItems((items) => items.filter((_item) => _item.id !== item.id));
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
      .then(() => filterItemsById(item.id))
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
          <div>{item.todo}</div>
          <button onClick={handleModificationMode}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoListItem;
