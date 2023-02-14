import "./style.scss";

import TodoFilterButtons from "../todoFilterButtons";
import { getAllTodo } from "../../redux/slices/todoSlice";
import { useAppSelector } from "../../redux/hook";
import TodoItem from "../todoItem";

const TodoList = () => {
  const todoList = useAppSelector(getAllTodo);
  return (
    <div className="todo-list">
      <div className="todo-list-title">
        <p className="title-text">Todo list</p>
      </div>
      <div className="todo-list-row">
        <TodoFilterButtons />
      </div>
      <div>
        {todoList?.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
