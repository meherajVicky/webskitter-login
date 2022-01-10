import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    settodo(state, action) {
      const newItm = action.payload;
      state.todoList?.push(newItm);
    },
  },
});
export const todoAction = todoSlice.actions;
