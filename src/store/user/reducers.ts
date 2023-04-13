import { combineReducers, createReducer } from "@reduxjs/toolkit";

import { REQ_STATUS } from "@/utils/enums";

import { fetchAuthLogin, login, logout } from "./actions";
import { AccountStateT } from "./types";

// .addCase -> .addMatcher -> .addDefaultCase 순으로 배치해야함
export const accountStateInit = {
  reqStatus: REQ_STATUS.PENDING,
  info: { nickName: "GAEUNDEV" },
} as AccountStateT;

const accountReducers = createReducer(accountStateInit, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.info.nickName = action.payload;
    })
    .addCase(logout, (state) => {
      state.info.nickName = null;
    })
    .addCase(fetchAuthLogin.pending, (state) => {
      state.reqStatus = REQ_STATUS.PENDING;
    })
    .addCase(fetchAuthLogin.fulfilled, (state, action) => {
      state.reqStatus = REQ_STATUS.FULFILLED;
      state.info.nickName = action.payload.nickName;
    })
    .addCase(fetchAuthLogin.rejected, (state) => {
      state.reqStatus = REQ_STATUS.REJECTED;
    });
});

export const userReducer = combineReducers({ account: accountReducers });
