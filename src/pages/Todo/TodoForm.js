import useInput from "../../hooks/useInput";
import axios from "../../api/axios";
import useTodoContext from "../../hooks/useTodoContext";

const TodoForm = () => {
  const [inputValue, handleChange, setInputValue] = useInput("");
  const { setItems } = useTodoContext();

  const handleSumbit = async (e) => {
    e.preventDefault();

    setInputValue("");
    const body = { todo: inputValue };
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .post("/todos", body, headers) //
      .then((res) => setItems((items) => [...items, res.data]))
      .catch(console.log);
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
