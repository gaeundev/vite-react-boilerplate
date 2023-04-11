import { PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import * as React from "react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import setupStore, { store, RootState, AppStore } from "../store/setupStores";

const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const customRender = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export * from "@testing-library/react";
export { customRender };
