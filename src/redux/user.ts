import { createSlice } from "@reduxjs/toolkit";

import { getItem, setItem } from "@/lib/utils";

const defaultState = {
  username: "",
  password: "",
  theme: "default",
  language: "en",
};
const initialState = getItem("user")
  ? {
      username: getItem("user").username,
      password: getItem("user").password,
      theme: getItem("user").theme || defaultState.theme,
      language: getItem("user").language || defaultState.language,
    }
  : defaultState;
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.username = payload.username;
      state.password = payload.password;
      setItem("user", state);
    },
    updateUser: (state, { payload }) => {
      state.username = payload;
    },
    logoutUser: (state) => {
      state.username = "";
      state.password = "";
      state.theme = "default";
      state.language = "en";
      setItem("user", null);
    },
    setTheme: (state, { payload }) => {
      state.theme = payload;
      setItem("user", state);
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
      setItem("user", state);
    },
  },
});

export const { loginUser, updateUser, logoutUser, setTheme, setLanguage } =
  userSlice.actions;

export default userSlice.reducer;
