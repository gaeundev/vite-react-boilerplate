import { createAction } from "@reduxjs/toolkit";

export const login = createAction<string>("user/login");
export const logout = createAction("user/logout");
