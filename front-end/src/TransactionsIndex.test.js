import { render, screen } from "@testing-library/react";

import RenderTransactions from "../src/components/Transactions/Index.js";

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

describe("Transactions component", () => {
  test("Should be empty", () => {
    render(
      <RenderTransactions
        transactions={transactions}
        selectedTransactions={""}
      />
    );
    const wrapper = screen.getByRole("contentInfo");
    expect(wrapper).toBeEmptyDOMElement();
  });

  test("Should call render sales component with manufacturer title", () => {
    render(
      <RenderTransactions
        transactions={transactions}
        selectedTransactions={"Manufacturer"}
      />
    );
    const title = screen.getByRole("title");
    expect(title).toHaveTextContent("Manufacturer");
  });

  test("Should call render sales component with affiliates title", () => {
    render(
      <RenderTransactions
        transactions={transactions}
        selectedTransactions={"Affiliates"}
      />
    );
    const title = screen.getByRole("title");
    expect(title).toHaveTextContent("Affiliates");
  });
});
