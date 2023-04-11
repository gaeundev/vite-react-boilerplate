import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import { userInfoInit } from "@/store/user/reducers";
import { customRender } from "@/utils/customRender";

import Home from "./HomePage";

describe("Home", () => {
  it("user nickname", () => {
    customRender(<Home />, {
      preloadedState: {
        userInfo: userInfoInit,
      },
    });

    const greetingsHeading = screen.getByTestId("greetings");

    expect(greetingsHeading).toHaveTextContent(`Hello, ${userInfoInit.nickName}`);
  });
  it("count increase", async () => {
    customRender(<Home />, {
      preloadedState: {
        userInfo: userInfoInit,
      },
    });

    const insuranceCheckbox = screen.getByTestId("increase");

    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);

    await waitFor(() => expect(screen.getByTestId("count")).toHaveTextContent("3"));
  });
});
