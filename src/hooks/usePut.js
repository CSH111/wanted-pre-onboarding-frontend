import { axiosPrivate } from "../api/axios";
import useTodoContext from "./useTodoContext";
import { URL } from "../api/url";

const usePut = () => {
  const { setItems } = useTodoContext();
  const { TODO } = URL;
  const putTodo = (id, body) => {
    return axiosPrivate
      .put(`${TODO}/${id}`, body) //
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
