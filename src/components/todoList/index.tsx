import "./style.scss";

import TodoFilterButtons from "../todoFilterButtons";

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="todo-list-title">
        <p className="title-text">Todo list</p>
      </div>
      <div className="todo-list-row">
        <TodoFilterButtons />
      </div>
      <div></div>
    </div>
  );
};

export default TodoList;
