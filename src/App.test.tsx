import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import App from "./App";

describe("App", () => {
  it("count increase", async () => {
    render(<App />);

    const insuranceCheckbox = screen.getByTestId("increase");

    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);

    await waitFor(() => expect(screen.getByTestId("count")).toHaveTextContent("3"));
  });
});
