import "./style.scss";

import { todoList } from "../../types/type";
import { RiEdit2Fill, RiDeleteBin5Fill } from "react-icons/ri";

type IProps = {
  item: todoList;
};

const TodoItem: React.FC<IProps> = ({ item }) => {
  return (
    <div className="todo-item">
      <div className="item-text">
        <p>{item.value}</p>
      </div>
      <div className="item-buttons">
        <input type="checkbox" className="input-checkbox" />
        <button className="button-icon-edit">
          <RiEdit2Fill className="icon" />
        </button>
        <button className="button-icon-delete">
          <RiDeleteBin5Fill className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
