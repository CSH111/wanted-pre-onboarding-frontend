import { axiosPrivate } from "../api/axios";
import useTodoContext from "./useTodoContext";

const useDelete = () => {
  const { setItems } = useTodoContext();

  const filterItemsById = (id) => {
    setItems((ctxItems) => ctxItems.filter((ctxItem) => ctxItem.id !== id));
  };

  const deleteTodo = (id) => {
    axiosPrivate
      .delete(`/todos/${id}`) //
      .then(() => filterItemsById(id))
      .catch(console.log);
  };

  return { deleteTodo };
};

export default useDelete;
