import React, { useEffect } from "react";
import axios, { axiosPrivate, setPrivateHeaders } from "../../api/axios";
import useTodoContext from "../../hooks/useTodoContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { items, setItems } = useTodoContext();

  useEffect(() => {
    axiosPrivate
      .get("/todos") //
      .then((res) => {
        setItems(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <ul>
      {items.map((item) => {
        return <TodoListItem key={item.id} item={item} setItems={setItems} />;
      })}
    </ul>
  );
};

export default TodoList;
