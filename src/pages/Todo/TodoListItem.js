import React from "react";

const TodoListItem = ({ item }) => {
  return (
    <li>
      <div>{item.todo}</div>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
};

export default TodoListItem;
