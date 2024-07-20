import { createSlice } from "@reduxjs/toolkit";

import { getItem, setItem } from "@/lib/utils";

const initialState = getItem("user")
  ? {
      username: getItem("user").username,
      password: getItem("user").password,
    }
  : {
      username: "",
      password: "",
    };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.username = payload.username;
      state.password = payload.password;
      const user = { username: state.username, password: state.password };
      setItem("user", user);
    },
    logoutUser: (state) => {
      state.username = "";
      state.password = "";
      setItem("user", null);
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
