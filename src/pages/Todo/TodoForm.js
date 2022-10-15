import { useInput } from "../../hooks";
import { axiosPrivate } from "../../api/axios";
import useTodoContext from "../../hooks/useTodoContext";
import { URL } from "../../api/url";
import { useEffect, useRef } from "react";
import { Add } from "../../components/icons";
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
    if (inputValue === "") return todoInput.current.focus();
    const body = { todo: inputValue };
    axiosPrivate
      .post(TODO, body) //
      .then((res) => {
        setItems((items) => [...items, res.data]);
        todoInput.current.focus();
        setInputValue("");
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
      <S.Button type="submit">
        <Add />
      </S.Button>
    </S.TodoForm>
  );
};

export default TodoForm;
