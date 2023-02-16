import "./style.scss";

import { todoList } from "../../types/type";
import { RiEdit2Fill, RiDeleteBin5Fill } from "react-icons/ri";
import { useAppDispatch } from "../../redux/hook";
import {
  deleteTodo,
  completeTodo,
  editTodo,
  setTodo,
} from "../../redux/slices/todoSlice";
import classNames from "classnames";
import { useState, ChangeEvent } from "react";

type IProps = {
  item: todoList;
};

const TodoItem: React.FC<IProps> = ({ item }) => {
  const [editButtonClick, setEditButtonClick] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(item.value);
  const dispatch = useAppDispatch();

  const deleteButtonIconClick = () => {
    dispatch(deleteTodo(item.id));
  };

  const completeInputCheckboxClick = () => {
    dispatch(completeTodo(item.id));
  };
  const editButtonIconClick = () => {
    setEditButtonClick(true);
    dispatch(setTodo(item));
  };

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const saveFormButtonOnClick = () => {
    dispatch(editTodo(inputValue));
    setEditButtonClick(false);
  };

  return (
    <div className="todo-item">
      <div className="item-text">
        {editButtonClick ? (
          <form className="form-edit">
            <input
              className={classNames({ "form-input": editButtonClick })}
              value={inputValue}
              onChange={inputOnChange}
            />
            <button className="form-button" onClick={saveFormButtonOnClick}>
              save
            </button>
          </form>
        ) : (
          <p className={classNames({ "is-check": item.isDone })}>{item.value}</p>
        )}
      </div>
      <div className="item-buttons">
        <input
          type="checkbox"
          className="input-checkbox"
          defaultChecked={item.isDone}
          onClick={completeInputCheckboxClick}
        />
        <button className="button-icon-edit" onClick={editButtonIconClick}>
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
