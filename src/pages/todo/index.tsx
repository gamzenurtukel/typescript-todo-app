import "./style.scss";

import TodoForm from "../../components/todoForm";
import TodoList from "../../components/todoList";

const Todo: React.FC = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
