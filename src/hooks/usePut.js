import { axiosPrivate } from "../api/axios";
import useTodoContext from "./useTodoContext";

const usePut = () => {
  const { setItems } = useTodoContext();

  const putTodo = (id, body) => {
    return axiosPrivate
      .put(`/todos/${id}`, body) //
      .then((res) => {
        setItems((ctxItems) => {
          return ctxItems.map((ctxItem) => {
            if (ctxItem.id === res.data.id) return res.data;
            return ctxItem;
          });
        });
      })
      .catch(console.log);
  };

  return { putTodo };
};

export default usePut;
