import "./style.scss";

import { useState, ChangeEvent } from "react";
import { addTodo } from "../../redux/slices/todoSlice";
import { useAppDispatch } from "../../redux/hook";

const TodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const buttonOnClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <div className="todo-form">
      <div className="form-title">
        <p className="title-text">What's the plan for today?</p>
      </div>
      <div className="form-container">
        <form className="form">
          <input
            className="form-input"
            placeholder="New todo"
            value={inputValue}
            onChange={inputOnChange}
          />
          <button className="form-button" onClick={buttonOnClick}>
            Add new task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
