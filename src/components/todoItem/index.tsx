import "./style.scss";

import { todoList } from "../../types/type";
import { RiEdit2Fill, RiDeleteBin5Fill } from "react-icons/ri";
import { useAppDispatch } from "../../redux/hook";
import { deleteTodo, completeTodo } from "../../redux/slices/todoSlice";
import classNames from "classnames";

type IProps = {
  item: todoList;
};

const TodoItem: React.FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const deleteButtonIconClick = () => {
    dispatch(deleteTodo(item.id));
  };

  const completeInputCheckboxClick = () => {
    dispatch(completeTodo(item.id));
  };

  return (
    <div className="todo-item">
      <div className="item-text">
        <p className={classNames({ "is-check": item.isDone })}>{item.value}</p>
      </div>
      <div className="item-buttons">
        <input
          type="checkbox"
          className="input-checkbox"
          onClick={completeInputCheckboxClick}
        />
        <button className="button-icon-edit">
          <RiEdit2Fill className="icon" />
        </button>
        <button className="button-icon-delete" onClick={deleteButtonIconClick}>
          <RiDeleteBin5Fill className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
