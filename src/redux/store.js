import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo";
import { userSlice } from "./user";
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    todo: todoSlice.reducer,
  },
});
