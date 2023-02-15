import "./style.scss";

import { resetDoneTodos, resetTodos } from "../../redux/slices/todoSlice";
import { useAppDispatch } from "../../redux/hook";

const TodoDeleteButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const deleteAllTodoButtonOnClick = () => {
    dispatch(resetTodos());
  };

  const deleteDoneTodosButtonOnClick = () => {
    dispatch(resetDoneTodos());
  };

  return (
    <div className="todo-delete-buttons">
      <button className="button-item" onClick={deleteDoneTodosButtonOnClick}>
        Delete done todos
      </button>
      <button className="button-item" onClick={deleteAllTodoButtonOnClick}>
        Delete all todo
      </button>
    </div>
  );
};

export default TodoDeleteButtons;
