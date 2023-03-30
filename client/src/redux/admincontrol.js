import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "counter",
  initialState: {
    adminControl: false,
  },
  reducers: {
    login: (state) => {
      state.adminControl = true;
    },
    logout: (state) => {
      state.adminControl = false;
    },
  },
});

export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer;
