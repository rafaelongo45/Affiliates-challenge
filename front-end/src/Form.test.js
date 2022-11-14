import React from "react";
import { render, screen } from "@testing-library/react";

import Form from "./components/Form/Index.js";

jest.mock("axios");

describe("Form component", () => {
  test("Should have a form", () => {
    jest.spyOn(React, "useContext").mockImplementationOnce(() => {
      return "";
    });
    render(<Form />);
    const input = screen.getByRole("contentInfo");
    expect(input).toBeInTheDocument();
  });

  test("Should have a button to send form", () => {
    jest.spyOn(React, "useContext").mockImplementationOnce(() => {
      return "";
    });
    render(<Form />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
