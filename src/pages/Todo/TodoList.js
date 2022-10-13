import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get("/todos", headers) //
      .then((res) => {
        setItems(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {items.map((item) => {
        return <TodoListItem key={item.id} item={item} />;
      })}
    </>
  );
};

export default TodoList;
