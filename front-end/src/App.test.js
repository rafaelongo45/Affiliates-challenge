import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./components/App/Index.js";

describe("App component", () => {
  test("Should have a form", () => {
    render(<App />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test("Should have a div with two buttons", () => {
    render(<App />);
    const buttonsDiv = screen.getByRole("group");
    expect(buttonsDiv).toHaveTextContent("Affiliates");
    expect(buttonsDiv).toHaveTextContent("Manufacturer");
  });
});

test("Should have a form", () => {
  render(<App />);
  const input = screen.getByRole("contentInfo");
  expect(input).toBeInTheDocument();
});
