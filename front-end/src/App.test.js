import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./components/App/Index.js";

describe("App component", () => {
  test("Should have a form", () => {
    render(<App />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test("Should have a div with one button", () => {
    render(<App />);
    const buttonsDiv = screen.getByRole("button");
    expect(buttonsDiv).toBeInTheDocument();
  });
});

test("Should have a form", () => {
  render(<App />);
  const input = screen.getByRole("contentInfo");
  expect(input).toBeInTheDocument();
});
