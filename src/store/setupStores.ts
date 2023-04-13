import { combineReducers, configureStore, type PreloadedState } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { accountStateInit, userReducer } from "@/store/user/reducers";

const rootReducer = combineReducers({
  user: userReducer,
});

export const rootStateInit: PreloadedState<RootState> = {
  user: { account: accountStateInit },
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* 테스트 코드(customRender라는 컴포넌트 생성 함수)에 필요 */
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;

export default setupStore;
