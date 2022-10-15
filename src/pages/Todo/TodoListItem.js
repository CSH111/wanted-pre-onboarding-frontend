import { useRef, useState } from "react";
import { Back, Delete, Edit, Ok } from "../../components/icons";
import { useDelete, useInput, usePut } from "../../hooks";
import * as S from "./styles";

const TodoListItem = ({ item }) => {
  const [isModificationMode, setIsModificationMode] = useState(false);
  const [inputValue, handleChange, setInputValue] = useInput();
  const { putTodo } = usePut();
  const { deleteTodo } = useDelete();
  const modifyingInput = useRef();

  const handleModificationMode = () => {
    setIsModificationMode(true);
    setInputValue(item.todo);
    setTimeout(() => modifyingInput.current.focus(), 0);
  };

  const handleCancelModification = () => setIsModificationMode(false);

  const handleModification = async () => {
    const body = { todo: inputValue, isCompleted: item.isCompleted };
    await putTodo(item.id, body);
    setIsModificationMode(false);
  };

  const handleisCompleted = () => {
    const body = { todo: item.todo, isCompleted: !item.isCompleted };
    putTodo(item.id, body);
  };

  const handleDelete = () => {
    deleteTodo(item.id);
  };

  return (
    <S.ListItem>
      {isModificationMode && (
        <>
          <S.ItemInput
            type="text"
            value={inputValue}
            onChange={handleChange}
            ref={modifyingInput}
          />
          <S.BtnBox>
            <S.Button onClick={handleModification}>
              <Ok />
            </S.Button>
            <S.Button onClick={handleCancelModification}>
              <Back />
            </S.Button>
          </S.BtnBox>
        </>
      )}
      {!isModificationMode && (
        <>
          <S.TodoContents
            isCompleted={item.isCompleted}
            onClick={handleisCompleted}
          >
            {item.todo}
          </S.TodoContents>
          <S.BtnBox>
            <S.Button onClick={handleModificationMode}>
              <Edit />
            </S.Button>
            <S.Button onClick={handleDelete}>
              <Delete />
            </S.Button>
          </S.BtnBox>
        </>
      )}
    </S.ListItem>
  );
};

export default TodoListItem;
