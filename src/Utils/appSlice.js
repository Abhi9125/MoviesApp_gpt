import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: null,

  reducers: {
    addUser: (state, action) => {
      state = action.payload;
      return state;
    },
    removeUser: (state, action) => {
      state = null;
      return;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
