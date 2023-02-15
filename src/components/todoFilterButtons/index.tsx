import "./style.scss";

type IProps = {
  doneButtonClick: () => void;
  allButtonOnClick: () => void;
  todoButtonOnClick: () => void;
};

const TodoFilterButtons: React.FC<IProps> = ({
  doneButtonClick,
  allButtonOnClick,
  todoButtonOnClick,
}) => {
  return (
    <div className="todo-filter-buttons">
      <button className="button-item" onClick={allButtonOnClick}>
        All
      </button>
      <button className="button-item" onClick={doneButtonClick}>
        Done
      </button>
      <button className="button-item" onClick={todoButtonOnClick}>
        Todo
      </button>
    </div>
  );
};

export default TodoFilterButtons;
