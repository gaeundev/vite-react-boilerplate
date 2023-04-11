import { createReducer } from "@reduxjs/toolkit";

import { login, logout } from "./actions";
import { UserInfoStateT } from "./types";

// .addCase -> .addMatcher -> .addDefaultCase 순으로 배치해야함
export const userInfoInit = { nickName: "GAEUNDEV" } as UserInfoStateT;
export const userInfoReducers = createReducer(userInfoInit, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.nickName = action.payload;
    })
    .addCase(logout, (state) => {
      state.nickName = null;
    });
});
