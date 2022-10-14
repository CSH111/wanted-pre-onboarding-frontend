import { useInput } from "../../hooks";
import { axiosPrivate, setPrivateHeaders } from "../../api/axios";
import useTodoContext from "../../hooks/useTodoContext";
import { URL } from "../../api/url";
import { useEffect, useRef } from "react";
import * as S from "./styles";

const TodoForm = () => {
  const [inputValue, handleChange, setInputValue] = useInput("");
  const { setItems } = useTodoContext();
  const { TODO } = URL;
  const todoInput = useRef();

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    setInputValue("");
    const body = { todo: inputValue };
    axiosPrivate
      .post(TODO, body) //
      .then((res) => {
        setItems((items) => [...items, res.data]);
        todoInput.current.focus();
      })
      .catch(console.log);
  };

  return (
    <S.TodoForm onSubmit={handleSumbit}>
      <S.TodoFormInput
        type="text"
        ref={todoInput}
        value={inputValue}
        onChange={handleChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">제출</button>
    </S.TodoForm>
  );
};

export default TodoForm;
