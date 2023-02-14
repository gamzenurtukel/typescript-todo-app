import "./style.scss";

const TodoForm: React.FC = () => {
  return (
    <div className="todo-form">
      <div className="form-title">
        <p className="title-text">What's the plan for today?</p>
      </div>
      <div className="form-container">
        <form className="form">
          <input className="form-input" placeholder="New todo" />
          <button className="form-button">Add new task</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
