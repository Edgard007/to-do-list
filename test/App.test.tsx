import React from "react";

// Testing
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

// Component
import App from "../src/App";

describe("<App />", () => {
  test("renders App component", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("app")).toBeDefined();
  });

  test("should add and remove items", async () => {
    const user = userEvent.setup();

    // Search input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // Search form
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    // Search button
    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // Add item
    const text = crypto.randomUUID();
    await user.type(input, text);
    await user.click(button!);

    // Check item
    const item = await screen.findByText(text);
    expect(item).toBeDefined();

    // // Remove item
    const remove = item?.querySelector("span");
    expect(remove).toBeDefined();

    user.click(remove!);
  });
});
