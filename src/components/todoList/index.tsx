import "./style.scss";

import TodoFilterButtons from "../todoFilterButtons";
import { getAllTodo } from "../../redux/slices/todoSlice";
import { useAppSelector } from "../../redux/hook";
import TodoItem from "../todoItem";
import React, { useEffect, useState } from "react";
import { todoList } from "../../types/type";
import { getDoneTodos, getNotIsDoneTodos } from "../../redux/slices/todoSlice";
import TodoDeleteButtons from "../tododeleteButtons";

const TodoList: React.FC = () => {
  const [todoListData, setTodoListData] = useState<todoList[]>();
  const [doneClick, setDoneClick] = useState<boolean>(false);
  const [notIsDoneClick, setnotIsDoneClick] = useState<boolean>(false);
  const [allClick, setAllClick] = useState<boolean>(false);

  const notIsDoneTodoList = useAppSelector(getNotIsDoneTodos);
  const todoList = useAppSelector(getAllTodo);
  const doneTodoList = useAppSelector(getDoneTodos);

  useEffect(() => {
    setTodoListData(todoList);
    if (doneClick) {
      setTodoListData(doneTodoList);
    }
    if (allClick) {
      setTodoListData(todoList);
    }
    if (notIsDoneClick) {
      setTodoListData(notIsDoneTodoList);
    }
  }, [
    todoListData,
    todoList,
    doneTodoList,
    doneClick,
    allClick,
    notIsDoneClick,
    notIsDoneTodoList,
  ]);

  const doneButtonOnClick = () => {
    setDoneClick(true);
    setAllClick(false);
    setnotIsDoneClick(false);
  };
  const allButtonOnClick = () => {
    setAllClick(true);
    setDoneClick(false);
    setnotIsDoneClick(false);
  };
  const todoButtonOnClick = () => {
    setnotIsDoneClick(true);
    setAllClick(false);
    setDoneClick(false);
  };

  return (
    <div className="todo-list">
      <div className="todo-list-title">
        <p className="title-text">Todo list</p>
      </div>
      <div className="todo-list-row">
        <TodoFilterButtons
          doneButtonClick={doneButtonOnClick}
          allButtonOnClick={allButtonOnClick}
          todoButtonOnClick={todoButtonOnClick}
        />
      </div>
      <div className="todo-list-items-container">
        {todoListData?.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
      <div className="todo-list-row-delete">
        <TodoDeleteButtons />
      </div>
    </div>
  );
};

export default TodoList;
