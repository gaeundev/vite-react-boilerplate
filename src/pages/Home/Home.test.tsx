import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import Home from "./HomePage";

describe("Home", () => {
  it("count increase", async () => {
    render(<Home />);

    const insuranceCheckbox = screen.getByTestId("increase");

    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);

    await waitFor(() => expect(screen.getByTestId("count")).toHaveTextContent("3"));
  });
});
