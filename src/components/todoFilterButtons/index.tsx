import "./style.scss";

const TodoFilterButtons: React.FC = () => {
  return (
    <div className="todo-filter-buttons">
      <button className="button-item">All</button>
      <button className="button-item">Done</button>
      <button className="button-item">Todo</button>
    </div>
  );
};

export default TodoFilterButtons;
