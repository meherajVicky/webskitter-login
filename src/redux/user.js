import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { userDetails: null },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const UserAction = userSlice.actions;
