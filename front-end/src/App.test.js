import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./components/App/Index.js";

const transactions = [
  {
    date: "2022-01-15T19:20:30-03:00",
    product: "KILLER QUEEN",
    seller: "Kira Yoshikage",
    value: 99999,
  },
  {
    date: "2022-01-15T19:23:30-03:00",
    product: "The world",
    seller: "Dio",
    value: 99999,
  },
];

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
