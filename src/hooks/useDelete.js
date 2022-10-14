import { axiosPrivate } from "../api/axios";
import { URL } from "../api/url";
import useTodoContext from "./useTodoContext";

const useDelete = () => {
  const { setItems } = useTodoContext();
  const { TODO } = URL;
  const filterItemsById = (id) => {
    setItems((ctxItems) => ctxItems.filter((ctxItem) => ctxItem.id !== id));
  };

  const deleteTodo = (id) => {
    axiosPrivate
      .delete(`${TODO}/${id}`) //
      .then(() => filterItemsById(id))
      .catch(console.log);
  };

  return { deleteTodo };
};

export default useDelete;
