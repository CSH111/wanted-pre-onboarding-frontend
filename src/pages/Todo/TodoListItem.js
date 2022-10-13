import React from "react";
import axios from "../../api/axios";
import useTodoContext from "../../hooks/useTodoContext";

const TodoListItem = ({ item, setItems }) => {
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
      <div>{item.todo}</div>
      <button>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
};

export default TodoListItem;
