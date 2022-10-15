import { useInput, usePost } from "../../hooks";
import { useEffect, useRef } from "react";
import { Add } from "../../components/icons";
import * as S from "./styles";
import { isEmpty } from "../../helpers/validation";

const TodoForm = () => {
  const [inputValue, handleChange, setInputValue] = useInput("");
  const todoInput = useRef();
  const { postTodo, updateCtxByResponse } = usePost();

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (isEmpty(inputValue)) return todoInput.current.focus();

    const body = { todo: inputValue };
    try {
      const res = await postTodo(body);
      updateCtxByResponse(res);
      setInputValue("");
    } catch (err) {
      console.log(err);
    } finally {
      todoInput.current.focus();
    }
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
