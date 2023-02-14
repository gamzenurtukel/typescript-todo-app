import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { todoList } from "../../types/type";
import { RootState } from "../store";

const initialState = {
  todoList: [] as todoList[],
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
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const getAllTodo = (state: RootState) => state.todos.todoList;
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
