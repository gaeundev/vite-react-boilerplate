import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rootStateInit, store } from "@/store/setupStores";
import { accountStateInit } from "@/store/user/reducers";
import { customRender } from "@/utils/customRender";

import Home from "./HomePage";

describe("Home", () => {
  it("user nickName", () => {
    customRender(<Home />, { preloadedState: rootStateInit });

    const greetingsHeading = screen.getByTestId("greetings");

    expect(greetingsHeading).toHaveTextContent(`Hello, ${accountStateInit.info.nickName}`);
  });
  it("count increase", async () => {
    customRender(<Home />, { preloadedState: rootStateInit });

    const insuranceCheckbox = screen.getByTestId("increase");

    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);

    await waitFor(() => expect(screen.getByTestId("count")).toHaveTextContent("3"));
  });
  it("user login", async () => {
    customRender(<Home />, { preloadedState: rootStateInit });

    const loginBtn = screen.getByTestId("loginBtn");
    userEvent.click(loginBtn);

    const greetingsHeading = screen.getByTestId("greetings");

    await waitFor(() =>
      expect(greetingsHeading).toHaveTextContent(
        `Hello, ${store.getState().user.account.info.nickName}`,
      ),
    );
  });
});
