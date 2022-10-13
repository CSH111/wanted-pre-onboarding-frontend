import React from "react";
import useInput from "../../hooks/useInput";
const TodoForm = () => {
  const [inputValue, handleChange] = useInput("");
  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="할 일을 입력하세요"
      />
      <button>제출</button>
    </form>
  );
};

export default TodoForm;
