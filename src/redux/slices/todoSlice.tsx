import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { todoList } from "../../types/type";
import { RootState } from "../store";

const initialState = {
  todoList: [] as todoList[],
  completeTodoList: [] as todoList[],
  notComplateTodoList: [] as todoList[],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoList = [
        {
          id: nanoid(),
          value: action.payload,
          isDone: false,
        },
        ...state.todoList,
      ];
      state.todoList.map((x) => {
        const todo = state.notComplateTodoList.find((item) => item.id === x.id);
        if (!todo) {
          state.notComplateTodoList.push(x);
        }
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
      state.completeTodoList = state.completeTodoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.notComplateTodoList = state.notComplateTodoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    completeTodo: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
          state.completeTodoList.push(todo);
          state.notComplateTodoList = state.notComplateTodoList.filter(
            (item) => item.id !== todo.id
          );
          if (!todo.isDone) {
            state.completeTodoList = state.completeTodoList.filter(
              (item) => item.id !== todo.id
            );
            state.notComplateTodoList.push(todo);
          }
        }
        return todo;
      });
    },
  },
});
export const getNotIsDoneTodos = (state: RootState) =>
  state.todos.notComplateTodoList;
export const getDoneTodos = (state: RootState) => state.todos.completeTodoList;
export const getAllTodo = (state: RootState) => state.todos.todoList;
export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
