import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import { userApi } from "@/api";

export const login = createAction<string>("user/login");
export const logout = createAction("user/logout");

export const fetchAuthLogin = createAsyncThunk("auth/login", async (userId: string) => {
  const response = await userApi.authLogin({ userId });

  return response;
});
