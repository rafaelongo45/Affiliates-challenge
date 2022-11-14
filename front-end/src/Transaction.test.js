import { render, screen } from "@testing-library/react";

import RenderTransaction from "./components/Transactions/RenderTransaction";

const transaction = {
  date: "2022-01-15T19:20:30-03:00",
  product: "KILLER QUEEN",
  seller: "Kira Yoshikage",
  value: 99999,
};

describe("Transaction component", () => {
  test("Should render a transaction", () => {
    render(<RenderTransaction transaction={transaction} />);
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });
});
