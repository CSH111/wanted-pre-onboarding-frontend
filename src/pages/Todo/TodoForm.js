import React, { useRef } from "react";
import useInput from "../../hooks/useInput";
import axios from "../../api/axios";
const TodoForm = () => {
  const [inputValue, handleChange] = useInput("");
  const todoInput = useRef();
  const handleSumbit = (e) => {
    e.preventDefault();
    todoInput.current.value = "";
    const body = { todo: inputValue };
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    // console.log(body);
    axios
      .post("/todos", body, headers) //
      .then((res) => console.log(res))
      .catch(console.log);
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        ref={todoInput}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
