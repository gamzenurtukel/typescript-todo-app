import "./style.scss";

import { resetTodo } from "../../redux/slices/todoSlice";
import { useAppDispatch } from "../../redux/hook";

const TodoDeleteButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const deleteAllTodoButtonOnClick = () => {
    dispatch(resetTodo());
    console.log("tıklandı");
  };

  return (
    <div className="todo-delete-buttons">
      <button className="button-item">Delete done todos</button>
      <button className="button-item" onClick={deleteAllTodoButtonOnClick}>
        Delete all todo
      </button>
    </div>
  );
};

export default TodoDeleteButtons;
